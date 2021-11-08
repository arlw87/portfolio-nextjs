import styles from "./NavBarSections.module.css";
import Link from "next/link";

// There may be a better way to do the linking of the section on the home page

const NavBarSections = () => {
  const sections = [
    {
      name: "About Me",
      link: "#aboutme",
      key: 1,
    },
    {
      name: "Technologies",
      link: "#technologies",
      key: 2,
    },
    {
      name: "Achievements",
      link: "#achievements",
      key: 3,
    },
    {
      name: "My Work",
      link: "",
      key: 4,
    },
    {
      name: "Contact Me",
      link: "#contactMe",
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
            <Link href={section.link}>
              <h2>{section.name}</h2>
            </Link>
            <hr></hr>
          </div>
        );
      })}
    </div>
  );
};

export default NavBarSections;
