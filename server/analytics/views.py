from collections import defaultdict

from django.core.cache import cache
from django.db.models import Q, Avg, FloatField, Count
from django.db.models.functions import ExtractYear, Round, Cast
from rest_framework.response import Response
from rest_framework.views import APIView

from analytics.models import Vacancy

base_filters = {"salary__isnull": False, "salary__lte": 10_000_000}
cache_timeout = 3600 * 24 * 30

def cached_function(key, timeout, func, *args, **kwargs):
    return cache.get_or_set(key, lambda: func(*args, **kwargs), timeout)


def get_salary_year_dynamic(**kwargs):
    return (
        Vacancy.objects.filter(Q(**base_filters, **kwargs))
        .annotate(year=ExtractYear('published_at'))
        .values('year')
        .annotate(salary=Round(Avg('salary', output_field=FloatField()), 1))
        .order_by('-year')
    )


def get_count_year_dynamic(**kwargs):
    return (
        Vacancy.objects.filter(Q(**kwargs))
        .annotate(year=ExtractYear('published_at'))
        .values('year')
        .annotate(vacancies=Count('id'))
        .order_by('-year')
    )


def get_top_10_salary_city(**kwargs):
    total_vacancies = Vacancy.objects.filter(Q(**base_filters)).count()

    dynamic = (
        Vacancy.objects.filter(Q(**base_filters, **kwargs))
        .values('area_name')
        .annotate(
            salary=Avg('salary'),
            vacancy_count=Count('id'),
            vacancy_percentage=Cast(Count('id') * 100.0 / total_vacancies, FloatField())
        )
        .filter(vacancy_percentage__gt=1)
        .order_by('-salary')[:10]
    )

    data = [
        {'city': city['area_name'], 'salary': round(city['salary'], 1)}
        for city in dynamic
    ]

    return data


def get_top_10_vac_city(**kwargs):
    total_vacancies = Vacancy.objects.count()

    dynamic = (
        Vacancy.objects.filter(Q(**kwargs))
        .values('area_name')
        .annotate(
            vacancy_count=Count('id'),
            fraction=Cast(Count('id') * 1000 / total_vacancies, FloatField())
        )
        .order_by('-fraction')[:10]
    )

    data = [
        {'city': city['area_name'], 'fraction': city['fraction'] / 10}
        for city in dynamic
    ]

    return data


def get_top_20_year_skills(**kwargs):
    annotated_vacancies = (
        Vacancy.objects
        .annotate(year=ExtractYear('published_at'))
        .values('year', 'key_skills__name')
        .filter(key_skills__name__isnull=False)
        .annotate(skill_count=Count('key_skills'))
        .order_by('year', '-skill_count')
    )

    top_skills_per_year = defaultdict(list)

    for item in annotated_vacancies:
        year = item['year']
        skill = item['key_skills__name']
        skill_count = item['skill_count']

        if len(top_skills_per_year[year]) < 20:
            top_skills_per_year[year].append({
                "skill": skill,
                "count": skill_count
            })

    data = [
        {"year": year, "skills": skills}
        for year, skills in top_skills_per_year.items()
    ]

    return data


class Common(APIView):
    def get(self, request):
        response_data = {
            "year_salary": cached_function("year_salary", cache_timeout, get_salary_year_dynamic),
            "year_vacancies": cached_function("year_vacancies", cache_timeout, get_count_year_dynamic),
            "city_salary": cached_function("city_salary", cache_timeout, get_top_10_salary_city),
            "city_vacancies_fraction": cached_function("city_vacancies_fraction", cache_timeout, get_top_10_vac_city),
            "year_skills": cached_function("year_skills", cache_timeout, get_top_20_year_skills),
        }

        return Response(response_data)


class Relevance(APIView):
    def get(self, request):
        pass


class Geography(APIView):
    def get(self, request):
        pass


class Skills(APIView):
    def get(self, request):
        pass
