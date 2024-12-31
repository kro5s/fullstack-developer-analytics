from django.db import models

# Create your models here.
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