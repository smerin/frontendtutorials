"use client";
import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

import styles from "./style.module.css";

const BasicParallaxBanner = () => {
  const bannerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: bannerRef,
    offset: ["start start", "end start"],
  });

  const titleY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const bannerY = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);

  return (
    <>
      <section ref={bannerRef} className={styles.hero} data-color="pacific">
        <motion.div style={{ y: bannerY }} className={styles.background}>
          <img
            className={styles.coverImage}
            src={"https://picsum.photos/id/10/1200/800"}
          />
        </motion.div>
        <motion.div style={{ y: titleY }} className={styles.content}>
          <h1>Parallax</h1>
        </motion.div>
      </section>
      <section className={styles.section} data-color="pacific">
        <div className={styles.content}>
          <h2>Lorem ipsum</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta
            quisquam, nesciunt optio molestias animi nam exercitationem officia
            quasi eos tempora fugiat saepe eaque architecto natus libero placeat
            quae expedita dolores.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta
            quisquam, nesciunt optio molestias animi nam exercitationem officia
            quasi eos tempora fugiat saepe eaque architecto natus libero placeat
            quae expedita dolores.
          </p>
          <br />
          <h3>Dolor sit amet</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta
            quisquam, nesciunt optio molestias animi nam exercitationem officia
            quasi eos tempora fugiat saepe eaque architecto natus libero placeat
            quae expedita dolores.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta
            quisquam, nesciunt optio molestias animi nam exercitationem officia
            quasi eos tempora fugiat saepe eaque architecto natus libero placeat
            quae expedita dolores.
          </p>
        </div>
      </section>
      <section className={styles.section} data-color="charcoal">
        <div className={styles.content}>
          <h2>Lorem ipsum</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta
            quisquam, nesciunt optio molestias animi nam exercitationem officia
            quasi eos tempora fugiat saepe eaque architecto natus libero placeat
            quae expedita dolores.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta
            quisquam, nesciunt optio molestias animi nam exercitationem officia
            quasi eos tempora fugiat saepe eaque architecto natus libero placeat
            quae expedita dolores.
          </p>
          <br />
          <h3>Dolor sit amet</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta
            quisquam, nesciunt optio molestias animi nam exercitationem officia
            quasi eos tempora fugiat saepe eaque architecto natus libero placeat
            quae expedita dolores.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta
            quisquam, nesciunt optio molestias animi nam exercitationem officia
            quasi eos tempora fugiat saepe eaque architecto natus libero placeat
            quae expedita dolores.
          </p>
        </div>
      </section>
    </>
  );
};

export default BasicParallaxBanner;
