import styles from "./Header.module.css";
import logo from "../../assets/logo.svg";
import {useIsMobile} from "../../hooks/hooks.ts";
import {useEffect, useState} from "react";
import NavigationLinks from "../NavigationLinks/NavigationLinks.tsx";
import {useLocation} from "react-router-dom";

function Header() {
  const location = useLocation();
  const isMobile = useIsMobile();
  const [isMobileMenuOpened, setIsMobileMenuOpened] = useState(false);

  function handleMenuToggle() {
    setIsMobileMenuOpened(prev => !prev);
  }

  useEffect(() => {
    setIsMobileMenuOpened(false);
  }, [location.pathname])

  return (
    <header className={styles.wrapper}>
      <a href="#"><img className={styles.logo} src={logo} alt="Fullstack Analytics"/></a>
      {
        isMobile &&
        <button onClick={handleMenuToggle} className={styles.menuIcon}>
          <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#FFFFFF">
            <path d="M144-264v-72h672v72H144Zm0-180v-72h672v72H144Zm0-180v-72h672v72H144Z"/>
          </svg>
        </button>
      }
      {
        isMobileMenuOpened &&
        <div className={styles.menu}>
          <NavigationLinks />
        </div>
      }
    </header>
  );
}

export default Header;
