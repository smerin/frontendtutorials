"use client";
// import { motion } from "framer-motion";

import styles from "./style.module.css";

const BasicParallaxFramerMotion = () => {
  return (
    <>
      <section className={styles.section} data-color="pink">
        <h1>Basic Parallax</h1>
      </section>
      <section className={styles.section} data-color="charcoal">
        <img
          className={styles.coverImage}
          src={"https://picsum.photos/id/58/1200/500"}
        />
      </section>
      <section className={styles.section} data-color="pacific">
        <h1>Basic Parallax</h1>
      </section>
      <section className={styles.section} data-color="charcoal">
        <img
          className={styles.coverImage}
          src={"https://picsum.photos/id/204/1200/500"}
        />
      </section>
      <section className={styles.section} data-color="yellow">
        <h1>Basic Parallax</h1>
      </section>
    </>
  );
};

export default BasicParallaxFramerMotion;
