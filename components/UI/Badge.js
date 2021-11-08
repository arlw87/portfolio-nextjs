import styles from "./Badge.module.css";
import Link from "next/link";

const Badge = (props) => {
  const source = props.imageSource;

  return (
    <Link href={props.link}>
      <div className={styles.badgeContainer}>
        <img src={source} alt={props.alt}></img>
      </div>
    </Link>
  );
};

export default Badge;
