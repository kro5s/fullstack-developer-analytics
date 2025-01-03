import styles from "./PageNavigation.module.css";
import {Link} from "react-router-dom";

interface Props {
  prev?: string;
  next?: string;
}

function PageNavigation({prev, next}: Props) {
  return (
    <div className={styles.container}>
      {
        prev ?
        <Link to={prev} className={styles.button}>
          <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.825 9.5L9.425 15.1L8 16.5L0 8.5L8 0.5L9.425 1.9L3.825 7.5H16V9.5H3.825Z" fill="#2C3E50"/>
          </svg>
        </Link>
          :
          <div></div>
      }

      {
        next &&
        <Link to={next} className={styles.button}>
          <svg className={styles.rotated} width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.825 9.5L9.425 15.1L8 16.5L0 8.5L8 0.5L9.425 1.9L3.825 7.5H16V9.5H3.825Z" fill="#2C3E50"/>
          </svg>
        </Link>
      }
    </div>
  );
}

export default PageNavigation;
