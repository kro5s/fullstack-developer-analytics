from django.core.management.base import BaseCommand
from django.db.models import F, FloatField, Q, Case, When, Value, OuterRef, Subquery
from django.db.models.functions import ExtractYear, ExtractMonth

from analytics.models import Vacancy, CurrencyExchange


class Command(BaseCommand):
    help = "Нахождение среднего значения для зарплаты и её перевод в рубли"

    def handle(self, *args, **options):
        exchange_rate_subquery = CurrencyExchange.objects.filter(
            currency=OuterRef('salary_currency'),
            date__year=ExtractYear(OuterRef('published_at')),
            date__month=ExtractMonth(OuterRef('published_at'))
        ).values('exchange_rate')[:1]

        salary_value_expr = Case(
            When(
                salary_from__isnull=False,
                salary_to__isnull=False,
                then=(F('salary_from') + F('salary_to')) / 2.0
            ),
            When(
                salary_from__isnull=False,
                salary_to__isnull=True,
                then=F('salary_from')
            ),
            When(
                salary_from__isnull=True,
                salary_to__isnull=False,
                then=F('salary_to')
            ),
            default=Value(None),
            output_field=FloatField()
        )

        Vacancy.objects.annotate(
            exchange_rate=Subquery(exchange_rate_subquery),
            calculated_salary=salary_value_expr
        ).update(
            salary=Case(
                When(
                    salary_currency='RUR',
                    calculated_salary__isnull=False,
                    then=F('calculated_salary') * Value(1.0)
                ),
                When(
                    calculated_salary__isnull=False,
                    exchange_rate__isnull=False,
                    then=F('calculated_salary') * F('exchange_rate')
                ),
                default=Value(None),
                output_field=FloatField()
            )
        )