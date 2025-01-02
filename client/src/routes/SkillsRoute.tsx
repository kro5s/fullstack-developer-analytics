import SkillsStatistics from "../components/SkillsStatistics/SkillsStatistics.tsx";
import {useQuery} from "react-query";

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


  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error occurred, try again...</div>;

  return (
    <>
      <SkillsStatistics data={data["year_skills"]} title={"Fullstack-разработчик"}/>
    </>
  );
}

export default SkillsRoute;
