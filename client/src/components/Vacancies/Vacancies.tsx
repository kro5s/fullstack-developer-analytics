import styles from "./Vacancies.module.css";
import {IVacancy} from "../../types/types.ts";
import Vacancy from "./Vacancy.tsx";

interface Props {
  data: IVacancy[];
}

function Vacancies({ data }: Props) {
  return (
    <ul className={styles.vacancies}>
      {
        data.map(vacancy => (
          <li key={vacancy.id}><Vacancy data={vacancy}/></li>
        ))
      }
    </ul>
  );
}

export default Vacancies;
