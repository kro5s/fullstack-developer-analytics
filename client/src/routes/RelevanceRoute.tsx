import AnalyticsTable from "../components/AnalyticsTable/AnalyticsTable.tsx";
import {transformNumberToCurrency} from "../utils/utils.ts";
import AnalyticsLine from "../components/AnalyticsLine/AnalyticsLine.tsx";

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

function RelevanceRoute() {
  return (
    <>
      <section className="analytics">
        <h2 className="title-xl">Динамика уровня зарплат по годам: Fullstack-разработчик</h2>
        <div className="analytics-data">
          <AnalyticsTable data={[mock1[0]].concat(mock1.slice(1).map(row => {
            const copy = [...row];
            copy[1] = transformNumberToCurrency(copy[1] as number);
            return copy;
          }))}/>
          <AnalyticsLine data={mock1}/>
        </div>
      </section>
      <section className="analytics">
        <h2 className="title-xl">Динамика количества вакансий по годам: Fullstack-разработчик</h2>
        <div className="analytics-data">
          <AnalyticsTable data={mock2}/>
          <AnalyticsLine data={mock2}/>
        </div>
      </section>
    </>
  );
}

export default RelevanceRoute;
