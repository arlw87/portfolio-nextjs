import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={styles.heroContainer}>
      <h1 className={styles.name}>Andrew White</h1>
      <div className={styles.job}>
        <h1>Front End </h1> <h1>&</h1> <h1>Software Developer</h1>
      </div>
      <button>Find Out More</button>
    </div>
  );
};

export default Hero;
