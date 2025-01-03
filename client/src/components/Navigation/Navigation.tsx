import styles from "./Navigation.module.css";
import {useContext} from "react";
import {NavigationContext} from "../Layout/Layout.tsx";
import classNames from "classnames";
import NavigationLinks from "../NavigationLinks/NavigationLinks.tsx";


function Navigation() {
  const {isNavigationHidden, setIsNavigationHidden} = useContext(NavigationContext);

  const handleNavigationToggle = () => {
    setIsNavigationHidden(prev => !prev);
  }

  const buttonStyles = classNames(styles.button, {
    [styles.hidden]: isNavigationHidden
  })

  return (
    <aside className={styles.wrapper}>
      {
        !isNavigationHidden ?
          <>
            <div className={styles.upper}>
              <span className={styles.title}>Навигация</span>
              <button onClick={handleNavigationToggle}>
                <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.825 9.5L9.425 15.1L8 16.5L0 8.5L8 0.5L9.425 1.9L3.825 7.5H16V9.5H3.825Z" fill="#2C3E50"/>
                </svg>
              </button>
            </div>
            <NavigationLinks />
          </>
          :
          <button onClick={handleNavigationToggle} className={buttonStyles}>
            <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.825 9.5L9.425 15.1L8 16.5L0 8.5L8 0.5L9.425 1.9L3.825 7.5H16V9.5H3.825Z" fill="#2C3E50"/>
            </svg>
          </button>
      }
    </aside>
  );
}

export default Navigation;
