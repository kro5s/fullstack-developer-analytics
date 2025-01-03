import AnalyticsTable from "../components/AnalyticsTable/AnalyticsTable.tsx";
import {prepareTableData, transformData, transformNumberToCurrency} from "../utils/utils.ts";
import AnalyticsLine from "../components/AnalyticsLine/AnalyticsLine.tsx";
import {useQuery} from "react-query";
import Loader from "../components/UI/Loader/Loader.tsx";
import PageNavigation from "../components/PageNavigation/PageNavigation.tsx";

function RelevanceRoute() {
  const {
    isLoading,
    isError,
    data
  } = useQuery({
    queryKey: ["relevance"],
    queryFn: async () => {
      const response = await fetch("http://localhost:8000/api/relevance")

      if (!response.ok) throw new Error();

      return await response.json();
    }
  });


  if (isLoading) return <Loader/>;
  if (isError) return <div>Error occurred, try again...</div>;

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
