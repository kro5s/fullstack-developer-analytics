import AnalyticsTable from "../components/AnalyticsTable/AnalyticsTable.tsx";
import {prepareTableData, transformData, transformNumberToCurrency} from "../utils/utils.ts";
import AnalyticsBar from "../components/AnalyticsBar/AnalyticsBar.tsx";
import AnalyticsPie from "../components/AnalyticsPie/AnalyticsPie.tsx";
import {useQuery} from "react-query";
import Loader from "../components/UI/Loader/Loader.tsx";
import PageNavigation from "../components/PageNavigation/PageNavigation.tsx";

function GeographyRoute() {
  const {
    isLoading,
    isError,
    data
  } = useQuery({
    queryKey: ["geography"],
    queryFn: async () => {
      const response = await fetch("http://localhost:8000/api/geography")

      if (!response.ok) throw new Error();

      return await response.json();
    }
  });


  if (isLoading) return <Loader/>;
  if (isError) return <div>Error occurred, try again...</div>;

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
