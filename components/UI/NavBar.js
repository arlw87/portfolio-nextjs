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
      <h2>Andrew</h2>
      <h3>{position}</h3>
    </nav>
  );
};

export default NavBar;
