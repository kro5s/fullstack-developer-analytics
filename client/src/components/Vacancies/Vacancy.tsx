import styles from "./Vacancies.module.css";
import {IVacancy} from "../../types/types.ts";
import {prepareSalary} from "../../utils/utils.ts";

interface Props {
  data: IVacancy;
}

function Vacancy({data}: Props) {
  const {
    name,
    area_name,
    company,
    key_skills,
    salary_from,
    salary_to,
    description,
    published_at,
    link
  } = data;

  return (
    <a href={link} target="_blank">
      <div className={styles.vacancy}>
        <h3 className="title-l">{name}</h3>
        <div className={styles.salary}><span>{prepareSalary(salary_from, salary_to)}</span></div>
        <p className={styles.description}>{description}</p>
        <ul className={styles.skills}>
          {
            key_skills.map((skill, i) => (
              <li key={i} className={styles.skill}>{skill}</li>
            ))
          }
        </ul>
        <div className={styles.company}><span>{company}</span></div>
        <div className={styles.bottom}>
          <span>{area_name}</span>
          <div className={styles.divider}></div>
          <span>{published_at}</span>
        </div>
      </div>
    </a>
  );
}

export default Vacancy;
