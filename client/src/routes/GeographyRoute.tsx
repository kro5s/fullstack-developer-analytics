import AnalyticsTable from "../components/AnalyticsTable/AnalyticsTable.tsx";
import {prepareTableData, transformData, transformNumberToCurrency} from "../utils/utils.ts";
import AnalyticsBar from "../components/AnalyticsBar/AnalyticsBar.tsx";
import AnalyticsPie from "../components/AnalyticsPie/AnalyticsPie.tsx";
import PageNavigation from "../components/PageNavigation/PageNavigation.tsx";

const data = {"city_salary":[{"city":"Киев","salary":203268.8},{"city":"Москва","salary":185156.9},{"city":"Минск","salary":163198.2},{"city":"Нижний Новгород","salary":151880.8},{"city":"Санкт-Петербург","salary":150724.2},{"city":"Новосибирск","salary":149913.0},{"city":"Астана","salary":143054.6},{"city":"Екатеринбург","salary":135960.2},{"city":"Казань","salary":134328.0},{"city":"Самара","salary":131839.5}],"city_vacancies_fraction":[{"city":"Москва","fraction":33.7},{"city":"Санкт-Петербург","fraction":14.5},{"city":"Минск","fraction":6.5},{"city":"Новосибирск","fraction":3.5},{"city":"Киев","fraction":3.0},{"city":"Алматы","fraction":2.7},{"city":"Казань","fraction":2.4},{"city":"Екатеринбург","fraction":2.0},{"city":"Нижний Новгород","fraction":1.9},{"city":"Краснодар","fraction":1.4}]};

function GeographyRoute() {
  return (
    <>
      <section className="analytics">
        <h2 className="title-xl">Уровень зарплат по городам: Fullstack-разработчик</h2>
        <div className="analytics-data">
          <AnalyticsTable
            data={
              prepareTableData(
                ["Город", "Зарплата"],
                data["city_salary"],
                transformNumberToCurrency
              ).slice(0, 11)
            }
          />
          <AnalyticsBar data={transformData(data["city_salary"]).reverse()}/>
        </div>
      </section>
      <section className="analytics">
        <h2 className="title-xl">Доля вакансий по городам: Fullstack-разработчик</h2>
        <div className="analytics-data">
          <AnalyticsTable
            data={
              prepareTableData(
                ["Город", "Доля вакансий"],
                data["city_vacancies_fraction"],
                e => `${e}%`
              ).slice(0, 11)
            }
          />
          <AnalyticsPie data={transformData(data["city_vacancies_fraction"])}/>
        </div>
      </section>
      <PageNavigation prev="/relevance" next="/skills" />
    </>
  );
}

export default GeographyRoute;
