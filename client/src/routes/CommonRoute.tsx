import AnalyticsTable from "../components/AnalyticsTable/AnalyticsTable.tsx";
import AnalyticsLine from "../components/AnalyticsLine/AnalyticsLine.tsx";
import {prepareTableData, transformData, transformNumberToCurrency} from "../utils/utils.ts";
import AnalyticsBar from "../components/AnalyticsBar/AnalyticsBar.tsx";
import AnalyticsPie from "../components/AnalyticsPie/AnalyticsPie.tsx";
import {useQuery} from "react-query";

const mock1 = [
  ["Год", "Зарплата"],
  ["2024", 112433],
  ["2023", 102343],
  ["2022", 89542],
  ["2021", 76435],
  ["2020", 85643],
  ["2019", 98064],
  ["2018", 73675],
  ["2017", 66547],
  ["2016", 76467],
  ["2015", 35678],
];

const mock2 = [
  ["Год", "Вакансии"],
  ["2024", 132],
  ["2023", 156],
  ["2022", 164],
  ["2021", 54],
  ["2020", 76],
  ["2019", 98],
  ["2018", 90],
  ["2017", 78],
  ["2016", 97],
  ["2015", 57],
];

const mock3 = [
  ["Город", "Зарплата"],
  ["Москва", 132423],
  ["Санкт-Петербург", 156543],
  ["Екатеринбург", 164345],
  ["Самара", 54452],
  ["Нижний Новгород", 76653],
  ["Новосибирск", 98564],
  ["Воронеж", 90745],
  ["Волгоград", 78356],
  ["Омск", 97674],
  ["Пермь", 57735],
];

const mock4 = [
  ["Город", "Доля вакансий"],
  ["Москва", 43],
  ["Санкт-Петербург", 22],
  ["Екатеринбург", 12],
  ["Самара", 4],
  ["Нижний Новгород", 4],
  ["Новосибирск", 3],
  ["Воронеж", 3],
  ["Волгоград", 3],
  ["Омск", 3],
  ["Пермь", 3],
];

const mock5 = [
  ["Год", "Навык"],
  ["2024", "Git"],
  ["2023", "Python"],
  ["2022", "JS"],
  ["2021", "PHP"],
  ["2020", "Ruby"],
  ["2019", "PHP"],
  ["2018", "JS"],
  ["2017", "HTML"],
  ["2016", "CSS"],
  ["2015", "PHP"],
];

const mock6 = [
  ["Год", "Навык"],
  ["Git", 100],
  ["Python", 90],
  ["JS", 80],
  ["PHP", 70],
  ["Ruby", 60],
  ["PHP", 60],
  ["JS", 50],
  ["HTML", 40],
  ["CSS", 30],
  ["PHP", 20],
];

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


  if (isLoading) return <div>Loading...</div>
  console.log(data)

  return (
    <>
      <section className="analytics">
        <h2 className="title-xl">Динамика уровня зарплат по годам: Все профессии</h2>
        <div className="analytics-data">
          <AnalyticsTable data={prepareTableData(["Год", "Зарплата"], data["year_salary"], transformNumberToCurrency).slice(0, 11)}/>
          <AnalyticsLine data={transformData(data["year_salary"])}/>
        </div>
      </section>
      <section className="analytics">
        <h2 className="title-xl">Динамика количества вакансий по годам: Все профессии</h2>
        <div className="analytics-data">
          <AnalyticsTable data={prepareTableData(["Год", "Вакансии"], data["year_vacancies"]).slice(0, 11)}/>
          <AnalyticsLine data={transformData(data["year_vacancies"])}/>
        </div>
      </section>
      <section className="analytics">
        <h2 className="title-xl">Уровень зарплат по городам: Все профессии</h2>
        <div className="analytics-data">
          <AnalyticsTable data={prepareTableData(["Город", "Зарплата"], data["city_salary"], transformNumberToCurrency).slice(0, 11)}/>
          <AnalyticsBar data={transformData(data["city_salary"])}/>
        </div>
      </section>
      <section className="analytics">
        <h2 className="title-xl">Уровень зарплат по городам: Все профессии</h2>
        <div className="analytics-data">
          <AnalyticsTable data={prepareTableData(["Город", "Доля вакансий"], data["city_vacancies_fraction"], e => `${e}%`).slice(0, 11)}/>
          <AnalyticsPie data={transformData(data["city_vacancies_fraction"])}/>
        </div>
      </section>
      <section className="analytics">
        <h2 className="title-xl">Самые востребованные навыки по годам: Все профессии</h2>
        <div className="analytics-data">
          <AnalyticsTable data={mock5}/>
          <AnalyticsBar data={mock6}/>
        </div>
      </section>
    </>
  );
}

export default CommonRoute;
