import styles from "./SubSectionLayout.module.css";

const SubSectionLayout = (props) => {
  //set the background Color out of the two options using classes
  let background = `${styles.backgroundTwo}`;
  if (props.isBackgroundOne) {
    background = `${styles.backgroundOne}`;
  }

  return (
    <div
      className={`${styles.subSectionContainer} ${background}`}
      id={props.id}
    >
      <h2>{props.title}</h2>
      <div className={styles.content}>{props.children}</div>
    </div>
  );
};

export default SubSectionLayout;
