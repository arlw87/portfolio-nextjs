import SubSectionLayout from "../Layout/SubSectionLayout";
import styles from "./Technologies.module.css";
import Badge from "../UI/Badge";

const listOfTech = [
  {
    name: "Python",
    icon: "/media/badges/python.png",
    link: "https://www.python.org/",
    key: 1,
  },
  {
    name: "JavaScript",
    icon: "/media/badges/javascript.png",
    link: "https://www.javascript.com/",
    key: 2,
  },
  {
    name: "NextJS",
    icon: "/media/badges/nextjs.png",
    link: "https://nextjs.org/",
    key: 3,
  },
  {
    name: "RaspberryPi",
    icon: "/media/badges/raspberrypi.png",
    link: "https://www.raspberrypi.org/",
    key: 4,
  },
  {
    name: "Android",
    icon: "/media/badges/android.png",
    link: "https://www.android.com/intl/en_uk/",
    key: 5,
  },
  {
    name: "Java",
    icon: "/media/badges/java.png",
    link: "https://www.oracle.com/uk/java/",
    key: 6,
  },
  {
    name: "CSS",
    icon: "/media/badges/css.png",
    link: "https://www.w3.org/Style/CSS/Overview.en.html",
    key: 7,
  },
  {
    name: "HTML",
    icon: "/media/badges/html.png",
    link: "https://www.w3.org/html/",
    key: 8,
  },
  {
    name: "ReactJS",
    icon: "/media/badges/reactjs.png",
    link: "https://reactjs.org/",
    key: 9,
  },
  {
    name: "Node",
    icon: "/media/badges/node.png",
    link: "https://nodejs.org/en/",
    key: 11,
  },
];

const Technologies = (props) => {
  return (
    <SubSectionLayout title={"Technologies"} isBackgroundOne={false}>
      <div className={styles.contentContainer}>
        <h3>Languages, frameworks and hardware i have worked with</h3>
        <div className={styles.badgeContainer}>
          {listOfTech.map((tech) => {
            return (
              <Badge
                imageSource={tech.icon}
                alt={tech.name}
                key={tech.key}
                link={tech.link}
              ></Badge>
            );
          })}
        </div>
      </div>
    </SubSectionLayout>
  );
};

export default Technologies;
