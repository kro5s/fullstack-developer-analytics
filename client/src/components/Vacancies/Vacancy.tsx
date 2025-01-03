import styles from "./Vacancies.module.css";
import {IVacancy} from "../../types/types.ts";
import {prepareSalary} from "../../utils/utils.ts";

interface Props {
  data: IVacancy;
}

function Vacancy({data}: Props) {
  const {
    name,
    alternate_url,
    salary,
    employer,
    area,
    published_at,
    description,
    key_skills
  } = data;

  const date = new Date(published_at);

  const formattedDay = String(date.getDate()).padStart(2, "0");
  const formattedMonth = String(date.getMonth() + 1).padStart(2, "0");
  const formattedYear = date.getFullYear();

  return (
    <a href={alternate_url} target="_blank">
      <div className={styles.vacancy}>
        <h3 className="title-l">{name}</h3>
        <div className={styles.salary}>
          <span>
            {
              salary ? prepareSalary(salary.from, salary.to, salary.currency) : "Уровень дохода не указан"
            }
          </span>
        </div>
        <div className={styles.descriptionWrapper}>
          <div className={styles.description} dangerouslySetInnerHTML={{__html: description}}></div>
        </div>
        <ul className={styles.skills}>
          {
            key_skills.map((skill, i) => (
              <li key={i} className={styles.skill}>{skill.name}</li>
            ))
          }
        </ul>
        <div className={styles.company}><span>{employer.name}</span></div>
        <div className={styles.bottom}>
          <span>{area.name}</span>
          <div className={styles.divider}></div>
          <span>{formattedDay}.{formattedMonth}.{formattedYear}</span>
        </div>
      </div>
    </a>
  );
}

export default Vacancy;
