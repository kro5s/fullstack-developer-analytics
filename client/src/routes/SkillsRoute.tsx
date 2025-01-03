import SkillsStatistics from "../components/SkillsStatistics/SkillsStatistics.tsx";
import {useQuery} from "react-query";
import Loader from "../components/UI/Loader/Loader.tsx";
import PageNavigation from "../components/PageNavigation/PageNavigation.tsx";

function SkillsRoute() {
  const {
    isLoading,
    isError,
    data
  } = useQuery({
    queryKey: ["skills"],
    queryFn: async () => {
      const response = await fetch("http://localhost:8000/api/skills")

      if (!response.ok) throw new Error();

      return await response.json();
    }
  });


  if (isLoading) return <Loader/>;
  if (isError) return <div>Error occurred, try again...</div>;

  return (
    <>
      <SkillsStatistics data={data["year_skills"]} title={"Fullstack-разработчик"}/>
      <PageNavigation prev="/geography" next="/latest" />
    </>
  );
}

export default SkillsRoute;
