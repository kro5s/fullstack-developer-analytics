import AnalyticsTable from "../components/AnalyticsTable/AnalyticsTable.tsx";
import {prepareTableData, transformData, transformNumberToCurrency} from "../utils/utils.ts";
import AnalyticsLine from "../components/AnalyticsLine/AnalyticsLine.tsx";
import PageNavigation from "../components/PageNavigation/PageNavigation.tsx";

const data = {"year_salary":[{"year":2024,"salary":183982.0},{"year":2023,"salary":167311.8},{"year":2022,"salary":176535.7},{"year":2021,"salary":164871.8},{"year":2020,"salary":139365.0},{"year":2019,"salary":132186.1},{"year":2018,"salary":116559.6},{"year":2017,"salary":113163.5},{"year":2016,"salary":124524.3},{"year":2015,"salary":166491.1},{"year":2014,"salary":66013.3},{"year":2013,"salary":70000.0}],"year_vacancies":[{"year":2024,"vacancies":5040},{"year":2023,"vacancies":6204},{"year":2022,"vacancies":6956},{"year":2021,"vacancies":8170},{"year":2020,"vacancies":5675},{"year":2019,"vacancies":4146},{"year":2018,"vacancies":3024},{"year":2017,"vacancies":1795},{"year":2016,"vacancies":863},{"year":2015,"vacancies":289},{"year":2014,"vacancies":40},{"year":2013,"vacancies":3}]};

function RelevanceRoute() {
  return (
    <>
      <section className="analytics">
        <h2 className="title-xl">Динамика уровня зарплат по годам: Fullstack-разработчик</h2>
        <div className="analytics-data">
          <AnalyticsTable
            data={
              prepareTableData(
                ["Год", "Зарплата"],
                data["year_salary"],
                transformNumberToCurrency
              ).slice(0, 11)
            }
          />
          <AnalyticsLine data={transformData(data["year_salary"]).reverse()}/>
        </div>
      </section>
      <section className="analytics">
        <h2 className="title-xl">Динамика количества вакансий по годам: Fullstack-разработчик</h2>
        <div className="analytics-data">
          <AnalyticsTable
            data={
              prepareTableData(
                ["Год", "Вакансии"],
                data["year_vacancies"]
              ).slice(0, 11)
            }
          />
          <AnalyticsLine data={transformData(data["year_vacancies"]).reverse()}/>
        </div>
      </section>
      <PageNavigation prev="/common" next="/geography" />
    </>
  );
}

export default RelevanceRoute;
