import React from "react";
import styles from "./NavBar.module.css";
import { useEffect, useState } from "react";
import NavBarSections from "./NavBarSections";

const getWindowPosition = () => {
  if (window !== "undefined") {
    return window.pageYOffset;
  }

  return 0;
};

const NavBar = (props) => {
  const [position, setPosition] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", (event) => {
        setPosition(getWindowPosition());
      });
    }
  }, []);

  const classes = `styles.nav ${position > 0 ? "styles.nav-non-top" : ""}`;

  //When the menu opens you want scrolling to be deactivated
  //so set overflow of the body to hidden so there is no overflow off the page to scroll too
  //when the menu is close you want to be able to scroll again so get overflow to scroll for body
  //This is directly manipulating the DOM, but it is the parent of where the react app is located
  //the body rather than manipulating the DOM that the React DOM manipulates.
  //https://stackoverflow.com/questions/39962757/prevent-scrolling-using-css-on-react-rendered-components

  const menuHandler = (event) => {
    setMenuOpen((prev) => {
      if (prev === false) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "scroll";
      }

      return !prev;
    });
  };

  return (
    <nav
      className={`${styles.navContainer} ${
        position > 0 || menuOpen ? styles.pageMoved : ""
      }`}
    >
      <div className={styles.navTop}>
        <img className={styles.logo} src="/media/logo.png" alt="logo" />
        <img
          className={styles.menu}
          src="/media/menuOpen.png"
          alt="menu"
          onClick={menuHandler}
        />
      </div>
      {menuOpen && <NavBarSections menuHandler={menuHandler}></NavBarSections>}
    </nav>
  );
};

export default NavBar;

{
  /* <div>Icons made by <a href="https://www.flaticon.com/authors/azmianshori" title="azmianshori">azmianshori</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> */
}
