import SubSectionLayout from "../Layout/SubSectionLayout";
import ProjectCard from "../UI/ProjectCard";
import styles from "./MyWork.module.css";

const MyWork = () => {
  return (
    <SubSectionLayout title={"My Work"} isBackgroundOne={false}>
      <div className={styles.container}>
        <ProjectCard></ProjectCard>
      </div>
    </SubSectionLayout>
  );
};

export default MyWork;
