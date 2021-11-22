import SubSectionLayout from "../Layout/SubSectionLayout";
import ProjectCard from "../UI/ProjectCard";
import styles from "./MyWork.module.css";
import matter from "gray-matter";
import path from "path";
//import fs from "fs";

const MyWork = ({ projects }) => {
  return (
    <SubSectionLayout title={"My Work"} isBackgroundOne={false}>
      <div className={styles.container}>
        {projects.map((project, index) => {
          return (
            <ProjectCard
              title={project.title}
              summary={project.summary}
              tech={project.tech}
              key={index}
            ></ProjectCard>
          );
        })}
      </div>
    </SubSectionLayout>
  );
};

export default MyWork;
