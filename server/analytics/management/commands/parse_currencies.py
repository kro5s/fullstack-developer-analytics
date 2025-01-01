from datetime import datetime
import requests
from django.core.management.base import BaseCommand
import xml.etree.ElementTree as ET

from analytics.models import CurrencyExchange


class Command(BaseCommand):
    help = "Парсинг данных курсов валют с сайта ЦБ РФ"

    def handle(self, *args, **options):
        currencies = ["BYR", "USD", "EUR", "KZT", "UAH", "AZN", "KGS", "UZS", "GEL"]

        last_year = datetime.now().year
        last_month = datetime.now().month

        for year in range(2003, last_year + 1):
            for month in range(1, 13):
                if year == last_year and month > last_month:
                    break

                date = datetime(year, month, 1)
                str_date = date.strftime("%d/%m/%Y")

                data = requests.get(f"http://www.cbr.ru/scripts/XML_daily.asp?date_req={str_date}").content
                root = ET.fromstring(data)

                for currency in currencies:
                    valute = root.find(f".//Valute[CharCode='{currency}']")
                    if valute is not None:
                        value = float(valute.find("Value").text.replace(",", "."))
                        nominal = int(valute.find("Nominal").text)
                        result_value = round(value / nominal, 8)

                        CurrencyExchange.objects.update_or_create(
                            currency=currency,
                            date=date,
                            defaults={'exchange_rate': result_value},
                        )

        self.stdout.write(self.style.SUCCESS("Курсы валют успешно обновлены."))