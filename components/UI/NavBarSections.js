import styles from "./NavBarSections.module.css";

const NavBarSections = () => {
  const sections = [
    {
      name: "About Me",
      link: "",
      key: 1,
    },
    {
      name: "Technologies",
      link: "",
      key: 2,
    },
    {
      name: "Achievements",
      link: "",
      key: 3,
    },
    {
      name: "My Work",
      link: "",
      key: 4,
    },
    {
      name: "Contact Me",
      link: "",
      key: 5,
    },
    {
      name: "Resume",
      link: "",
      key: 6,
    },
  ];

  return (
    <div className={styles.sectionsContainer}>
      {sections.map((section) => {
        return (
          <div className={styles.section} key={section.key}>
            <h2>{section.name}</h2>
            <hr></hr>
          </div>
        );
      })}
    </div>
  );
};

export default NavBarSections;
