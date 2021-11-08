import SubSectionLayout from "../Layout/SubSectionLayout";
import styles from "./Contact.module.css";
import Link from "next/link";

const Contact = (props) => {
  return (
    <SubSectionLayout
      title={"Contact Me"}
      isBackgroundOne={false}
      id={"contactMe"}
    >
      <div id="contact" className={styles.container}>
        <Link href="https://github.com/arlw87">
          <img alt="GitHub" src="./media/contact/github.png" />
        </Link>
        <Link href="mailto:arlw87@googlemail.com">
          <img alt="Email" src="./media/contact/email.png" />
        </Link>
        <Link href="https://www.linkedin.com/in/andrew-white-15a03941/">
          <img alt="LinkedIn" src="./media/contact/linkedin.png" />
        </Link>
      </div>
    </SubSectionLayout>
  );
};

export default Contact;
