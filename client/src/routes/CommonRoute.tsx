import AnalyticsTable from "../components/AnalyticsTable/AnalyticsTable.tsx";
import AnalyticsLine from "../components/AnalyticsLine/AnalyticsLine.tsx";
import {prepareTableData, transformData, transformNumberToCurrency} from "../utils/utils.ts";
import AnalyticsBar from "../components/AnalyticsBar/AnalyticsBar.tsx";
import AnalyticsPie from "../components/AnalyticsPie/AnalyticsPie.tsx";
import {useQuery} from "react-query";
import SkillsStatistics from "../components/SkillsStatistics/SkillsStatistics.tsx";
import Loader from "../components/UI/Loader/Loader.tsx";
import PageNavigation from "../components/PageNavigation/PageNavigation.tsx";

function CommonRoute() {
  const {
    isLoading,
    isError,
    data
  } = useQuery({
    queryKey: ["common"],
    queryFn: async () => {
      const response = await fetch("http://localhost:8000/api/common")

      if (!response.ok) throw new Error();

      return await response.json();
    }
  });


  if (isLoading) return <Loader/>;
  if (isError) return <div>Error occurred, try again...</div>;

  return (
    <>
      <section className="analytics">
        <h2 className="title-xl">Динамика уровня зарплат по годам: Все профессии</h2>
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
        <h2 className="title-xl">Динамика количества вакансий по годам: Все профессии</h2>
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
      <section className="analytics">
        <h2 className="title-xl">Уровень зарплат по городам: Все профессии</h2>
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
        <h2 className="title-xl">Доля вакансий по городам: Все профессии</h2>
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
      <SkillsStatistics data={data["year_skills"]} />
      <PageNavigation prev="/" next="/relevance" />
    </>
  );
}

export default CommonRoute;
