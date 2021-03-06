import SubSectionLayout from "../Layout/SubSectionLayout";
import styles from "./AboutMe.module.css";

const AboutMe = () => {
  return (
    <SubSectionLayout title={"About Me"} isBackgroundOne={true} id={"aboutme"}>
      <div className={styles.contentContainer}>
        <img className={styles.image} src="./media/b_w.png"></img>
        <div className={styles.textContainer}>
          <p>
            I’m a senior engineer wth over 10 years of experience in the space
            industry. My passion for using technology to create innovative
            solution to problems has led me to peruse a career change into
            software development.
          </p>
          <p>
            My self driven journey in programming has seen me learn multiple
            languages and frameworks allowing me to create projects from an
            android app to a javascript programmed photo frame through to NextJS
            static generated websites.
          </p>
          <p>
            I have recently been focussing on front end development and have
            completed a Udacity course on web developement and another on
            JavaScript, which has led me to a commission to create a Medical
            resource websiste. I’m engaged and committed and hope to find new
            opportunities in the software and web development industries.{" "}
          </p>
        </div>
      </div>
    </SubSectionLayout>
  );
};

export default AboutMe;
