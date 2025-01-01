from django.db import models


class Skill(models.Model):
    name = models.CharField(max_length=255, unique=True)

class Vacancy(models.Model):
    name = models.CharField(max_length=255)
    key_skills = models.ManyToManyField(Skill)
    salary_from = models.FloatField(null=True, blank=True)
    salary_to = models.FloatField(null=True, blank=True)
    salary_currency = models.CharField(max_length=3, null=True, blank=True)
    area_name = models.CharField(max_length=255)
    published_at = models.DateTimeField()

    salary = models.FloatField(null=True, blank=True)

class CurrencyExchange(models.Model):
    currency = models.CharField(max_length=10)
    exchange_rate = models.FloatField()
    date = models.DateTimeField()

    class Meta:
        unique_together = ('currency', 'date')