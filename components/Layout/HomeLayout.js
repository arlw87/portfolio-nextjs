import Hero from "../UI/Hero";
import NavBar from "../UI/NavBar";
import styles from "./HomeLayout.module.css";
import AboutMe from "../SubSections/AboutMe";
import Technologies from "../SubSections/Technologies";

const HomeLayout = () => {
  return (
    <div className={styles.homeContainer}>
      <NavBar></NavBar>
      <Hero></Hero>
      <AboutMe></AboutMe>
      <Technologies></Technologies>
    </div>
  );
};

export default HomeLayout;
