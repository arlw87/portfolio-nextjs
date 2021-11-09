import Hero from "../UI/Hero";
import NavBar from "../UI/NavBar";
import styles from "./HomeLayout.module.css";
import AboutMe from "../SubSections/AboutMe";
import Technologies from "../SubSections/Technologies";
import Achievements from "../SubSections/Achievements";
import Contact from "../SubSections/Contact";
import MyWork from "../SubSections/MyWork";

const HomeLayout = () => {
  return (
    <div className={styles.homeContainer}>
      <NavBar></NavBar>
      <Hero></Hero>
      <AboutMe></AboutMe>
      <Technologies></Technologies>
      <Achievements></Achievements>
      <MyWork></MyWork>
      <Contact></Contact>
    </div>
  );
};

export default HomeLayout;
