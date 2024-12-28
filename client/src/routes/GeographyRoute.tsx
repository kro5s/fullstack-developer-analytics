import AnalyticsTable from "../components/AnalyticsTable/AnalyticsTable.tsx";
import {transformNumberToCurrency} from "../utils/utils.ts";
import AnalyticsBar from "../components/AnalyticsBar/AnalyticsBar.tsx";
import AnalyticsPie from "../components/AnalyticsPie/AnalyticsPie.tsx";

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

function GeographyRoute() {
  return (
    <>
      <section className="analytics">
        <h2 className="title-xl">Уровень зарплат по городам: Fullstack-разработчик</h2>
        <div className="analytics-data">
          <AnalyticsTable data={[mock3[0]].concat(mock3.slice(1).map(row => {
            const copy = [...row];
            copy[1] = transformNumberToCurrency(copy[1] as number);
            return copy;
          }))}/>
          <AnalyticsBar data={mock3}/>
        </div>
      </section>
      <section className="analytics">
        <h2 className="title-xl">Уровень зарплат по городам: Fullstack-разработчик</h2>
        <div className="analytics-data">
          <AnalyticsTable data={[mock4[0]].concat(mock4.slice(1).map(row => {
            const copy = [...row];
            copy[1] = `${copy[1]}%`
            return copy;
          }))}/>
          <AnalyticsPie data={mock4}/>
        </div>
      </section>
    </>
  );
}

export default GeographyRoute;
