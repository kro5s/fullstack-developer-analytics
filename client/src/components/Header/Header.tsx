import styles from "./Header.module.css";
import logo from "../../assets/logo.svg";
import login from "../../assets/icons/login.svg";

function Header() {
  return (
    <header className={styles.wrapper}>
      <a href="#"><img src={logo} alt="Fullstack Analytics"/></a>
      <a href="#"><img className={styles.login} src={login} alt="Авторизация"/></a>
    </header>
  );
}

export default Header;
