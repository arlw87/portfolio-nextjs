import React from "react";
import styles from "./NavBar.module.css";
import { useEffect, useState } from "react";

const getWindowPosition = () => {
  if (window !== "undefined") {
    return window.pageYOffset;
  }

  return 0;
};

const NavBar = (props) => {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", (event) => {
        setPosition(getWindowPosition());
      });
    }
  }, []);

  const classes = `styles.nav ${position > 0 ? "styles.nav-non-top" : ""}`;

  return (
    <nav className={`${styles.nav} ${position > 0 ? styles.navNonTop : ""}`}>
      <img className={styles.logo} src="/media/logo.png" alt="logo" />
      <img className={styles.menu} src="/media/menuOpen.png" alt="menu" />
    </nav>
  );
};

export default NavBar;

{
  /* <div>Icons made by <a href="https://www.flaticon.com/authors/azmianshori" title="azmianshori">azmianshori</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> */
}
