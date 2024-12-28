import styles from "./Layout.module.css";
import {Outlet, useLocation} from "react-router-dom";
import {createContext, Dispatch, SetStateAction, useEffect, useState} from "react";
import Header from "../Header/Header.tsx";
import Navigation from "../Navigation/Navigation.tsx";
import Footer from "../Footer/Footer.tsx";
import classNames from "classnames";

export const NavigationContext = createContext<{
  isNavigationHidden: boolean,
  setIsNavigationHidden: Dispatch<SetStateAction<boolean>>
}>({
  isNavigationHidden: false,
  setIsNavigationHidden: () => {}
});

function Layout() {
  const location = useLocation();
  const [isNavigationHidden, setIsNavigationHidden] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname])

  const layoutStyles = classNames(styles.layout, {
    [styles.hidden]: isNavigationHidden
  })

  return (
    <NavigationContext.Provider value={{ isNavigationHidden, setIsNavigationHidden }}>
      <div className={layoutStyles}>
        <Header/>
        <Navigation/>
        <main className={styles.main}>
          <Outlet/>
        </main>
        <Footer/>
      </div>
    </NavigationContext.Provider>
  );
}

export default Layout;
