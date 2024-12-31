from django.core.management.base import BaseCommand

class Command(BaseCommand):
    help = "Конвертация валют у вакансий, представленных в базе данных"

    def handle(self, *args, **options):
