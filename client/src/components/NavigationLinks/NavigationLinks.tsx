import styles from "./NavigationLinks.module.css";
import {NavLink} from "react-router-dom";

const links = {
  "Главная": "/",
  "Общая статистика": "/common",
  "Востребованность": "/relevance",
  "География": "/geography",
  "Навыки": "/skills",
  "Последние вакансии": "/latest"
}


function NavigationLinks() {
  return (
    <ul className={styles.links}>
      {
        Object.entries(links).map(([title, link], i) => (
          <li
            key={i}
            className={styles.link}
          >
            <NavLink
              to={link}
              className={({isActive}) => isActive ? styles.active : undefined}
            >
              {title}
            </NavLink>
          </li>
        ))
      }
    </ul>
  );
}

export default NavigationLinks;
