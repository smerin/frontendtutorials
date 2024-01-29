import Link from "next/link";
import Button, { ButtonStyles } from "@src/components/Button/Button";

import styles from "./ContactPage.module.css";

const ContactPage = (): JSX.Element => {
  return (
    <div className={styles.contact}>
      <h1 className={styles.title}>Contact George</h1>
      <p className={styles.message}>
        Get in touch with any feedback on the tutorials, or if you would like to
        discuss hiring me to work on your next project.
      </p>

      <div className={styles.buttons}>
        <Link href="https://www.linkedin.com/in/smerin/" target="_blank">
          <Button buttonStyle={ButtonStyles.WHITE} handleClick={() => {}}>
            LinkedIn
          </Button>
        </Link>
        <Link href="mailto:gsmerin@gmail.com" target="_blank">
          <Button buttonStyle={ButtonStyles.WHITE} handleClick={() => {}}>
            Email
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ContactPage;
