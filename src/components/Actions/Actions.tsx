"use client";
import Link from "next/link";
import Button, { ButtonStyles } from "../Button/Button";

import styles from "./Actions.module.css";

const Actions = () => {
  const openContact = () => {
    console.log("open form...");
  };
  return (
    <div className={styles.actions}>
      <ul className={styles.actionList}>
        <li>
          <Link href="https://www.linkedin.com/in/smerin/">
            <Button buttonStyle={ButtonStyles.TURQUOISE}>LinkedIn</Button>
          </Link>
        </li>
        <li>
          <Link href="mailto:mail@smerin.io">
            <Button
              buttonStyle={ButtonStyles.TURQUOISE}
              handleClick={openContact}
            >
              Email me
            </Button>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Actions;
