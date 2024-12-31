from django.core.management.base import BaseCommand
import pandas as pd
from django.db import transaction
from tqdm import tqdm

from analytics.models import Vacancy, Skill


class Command(BaseCommand):
    help = "Импорт данных из CSV в базу данных"

    def add_arguments(self, parser):
        parser.add_argument('csv_file', type=str, help='Путь к csv-файлу')

    def handle(self, *args, **options):
        csv_file = options['csv_file']
        self.stdout.write(f'Импорт данных из файла: {csv_file}...')

        data_dtype = {
            "name": str,
            "key_skills": str,
            "salary_from": str,
            "salary_to": str,
            "salary_currency": str,
            "area_name": str,
            "published_at": str
        }

        try:
            df = pd.read_csv(csv_file, dtype=data_dtype)
        except Exception as e:
            self.stderr.write(f'Ошибка чтения CSV файла: {e}')
            return

        self.stdout.write(f'Преобразование данных...')
        df['salary_from'] = pd.to_numeric(df['salary_from'], errors='coerce')
        df['salary_to'] = pd.to_numeric(df['salary_to'], errors='coerce')
        df['published_at'] = pd.to_datetime(df['published_at'], utc=True, errors='coerce')

        existing_skills = {skill.name: skill for skill in Skill.objects.all()}

        new_skills = []
        vacancies = []
        vacancy_skills = []

        chunk_size = 1000
        with transaction.atomic():
            for _, row in tqdm(df.iterrows(), total=len(df), desc="Обработка данных", unit="вакансий"):
                key_skills = str(row['key_skills']).split('\n') if pd.notna(row['key_skills']) else []

                skill_objects = []
                for skill_name in key_skills:
                    skill_name = skill_name.strip()
                    if skill_name not in existing_skills:
                        new_skill = Skill(name=skill_name)
                        new_skills.append(new_skill)
                        existing_skills[skill_name] = new_skill
                    skill_objects.append(existing_skills[skill_name])

                vacancy = Vacancy(
                    name=row['name'],
                    salary_from=row['salary_from'],
                    salary_to=row['salary_to'],
                    salary_currency=row['salary_currency'],
                    area_name=row['area_name'],
                    published_at=row['published_at'],
                )
                vacancies.append(vacancy)
                vacancy_skills.append((vacancy, skill_objects))

                if len(new_skills) >= chunk_size:
                    Skill.objects.bulk_create(new_skills)
                    new_skills = []

            if new_skills:
                Skill.objects.bulk_create(new_skills)

            for i in tqdm(range(0, len(vacancies), chunk_size), desc="Сохранение вакансий", unit="чанков"):
                Vacancy.objects.bulk_create(vacancies[i:i + chunk_size])

            for vacancy, skills in tqdm(vacancy_skills, desc="Создание отношений", unit="вакансий"):
                vacancy.key_skills.add(*[skill.id for skill in skills])

        self.stdout.write(self.style.SUCCESS('Данные успешно импортированы'))