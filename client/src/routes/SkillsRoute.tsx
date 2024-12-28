import AnalyticsTable from "../components/AnalyticsTable/AnalyticsTable.tsx";
import AnalyticsBar from "../components/AnalyticsBar/AnalyticsBar.tsx";

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

function SkillsRoute() {
  return (
    <>
      <section className="analytics">
        <h2 className="title-xl">Самые востребованные навыки по годам: Fullstack-разработчик</h2>
        <div className="analytics-data">
          <AnalyticsTable data={mock5}/>
          <AnalyticsBar data={mock6}/>
        </div>
      </section>
    </>
  );
}

export default SkillsRoute;
