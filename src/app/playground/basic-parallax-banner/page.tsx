"use client";
import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

import styles from "./style.module.css";

const BasicParallaxBanner = () => {
  const bannerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: bannerRef,
    offset: ["start end", "end start"],
  });

  let y = useTransform(scrollYProgress, [0, 1], ["0%", "-25%"]);

  return (
    <>
      <section className={styles.section} data-color="pacific">
        <div className={styles.content}>
          <h1>↓ Parallax Banner ↓</h1>
        </div>
      </section>
      <section ref={bannerRef} className={styles.section} data-color="charcoal">
        <motion.div style={{ y }} className={styles.background}>
          <img
            className={styles.coverImage}
            src={"https://picsum.photos/id/103/1200/800"}
          />
        </motion.div>
        <div className={styles.content}>
          <h1>Parallax Banner</h1>
        </div>
      </section>
      <section className={styles.section} data-color="yellow">
        <div className={styles.content}>
          <h1>↑ Parallax Banner ↑</h1>
        </div>
      </section>
      <section className={styles.section} data-color="apple">
        <div className={styles.content}>
          <h1>↑ Parallax Banner ↑</h1>
        </div>
      </section>
    </>
  );
};

export default BasicParallaxBanner;
