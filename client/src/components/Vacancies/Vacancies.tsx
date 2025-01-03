import styles from "./Vacancies.module.css";
import {IVacancy} from "../../types/types.ts";
import {useQueries, useQuery} from "react-query";
import Vacancy from "./Vacancy.tsx";
import Loader from "../UI/Loader/Loader.tsx";

function Vacancies() {
  const {
    data,
    isLoading,
    isError
  } = useQuery({
    queryKey: ["vacancies"],
    queryFn: async (): Promise<{items: IVacancy[]}> => {
      const response = await fetch("https://api.hh.ru/vacancies?text=fullstack&per_page=10&order_by=publication_time");

      if (!response.ok) throw new Error();

      return await response.json();
    }
  });

  const vacancies = useQueries(
    data
      ? data.items.map(vacancy => {
        return {
          queryKey: ["vacancy", vacancy.id],
          queryFn: async () => {
            const response = await fetch(`https://api.hh.ru/vacancies/${vacancy.id}`);

            if (!response.ok) throw new Error();

            return await response.json();
          }
        }
      })
      : []
  )

  const isLoadingVacancies = vacancies.some((query) => query.isLoading);
  const isErrorVacancies = vacancies.some((query) => query.isError);

  if (isLoading || isLoadingVacancies) return <Loader/>;
  if (isError || isErrorVacancies) return <div>Error occurred, try again...</div>;

  return (
    <ul className={styles.vacancies}>
      {
        vacancies.map(e => e.data).map(vacancy => (
          <li key={vacancy.id}><Vacancy data={vacancy}/></li>
        ))
      }
    </ul>
  );
}

export default Vacancies;
