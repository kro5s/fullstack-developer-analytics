import Vacancies from "../components/Vacancies/Vacancies.tsx";
import PageNavigation from "../components/PageNavigation/PageNavigation.tsx";

function LatestRoute() {
  return (
    <>
      <h2 className="title-xl">Вакансии Fullstack-разработчика за последние 24 часа</h2>
      <Vacancies />
      <PageNavigation prev="/skills" />
    </>
  );
}

export default LatestRoute;
