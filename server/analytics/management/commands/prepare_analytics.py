from django.core.management.base import BaseCommand


class Command(BaseCommand):
    help = "Подготовка результатов аналитики"

    def handle(self, *args, **options):
        pass