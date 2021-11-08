import SubSectionLayout from "../Layout/SubSectionLayout";
import Link from "next/link";
import styles from "./Achievements.module.css";

const Achievements = (props) => {
  return (
    <SubSectionLayout
      title={"Achievements"}
      backgroundOne={true}
      id={"achievements"}
    >
      <div className={styles.container}>
        <Link href={"https://confirm.udacity.com/Q73DZFCM"}>
          <h3>
            Front End Development Nanodegree from Udacity Graduated April 2021
          </h3>
        </Link>
        <Link href={"https://confirm.udacity.com/QGL6YAKH"}>
          <h3>
            Udacity Intermediate JavaScript Nanodegree Graduated September 2021
          </h3>
        </Link>
      </div>
    </SubSectionLayout>
  );
};

export default Achievements;
