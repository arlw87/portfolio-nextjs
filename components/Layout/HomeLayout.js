import Hero from "../UI/Hero";
import NavBar from "../UI/NavBar";
import styles from "./HomeLayout.module.css";

const HomeLayout = () => {
  return (
    <div className={styles.homeContainer}>
      <NavBar></NavBar>
      <Hero></Hero>
      <Hero></Hero>
    </div>
  );
};

export default HomeLayout;
