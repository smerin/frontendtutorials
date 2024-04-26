"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button, { ButtonStyles } from "@src/components/Button/Button";

import styles from "./style.module.css";

const FramerMotionEnterExit = () => {
  const [showTitle, setShowTitle] = useState(false);

  return (
    <>
      <section className={styles.section} data-color="pink">
        <AnimatePresence>
          {showTitle && (
            <motion.div
              animate={{ scale: 1, opacity: 1 }}
              initial={{ scale: 0, opacity: 0 }}
              exit={{ scale: 0, opacity: 0 }}
            >
              <h1>🔥 Framer Motion 🔥</h1>
            </motion.div>
          )}
        </AnimatePresence>
        <Button
          buttonStyle={ButtonStyles.WHITE}
          handleClick={() => setShowTitle(!showTitle)}
        >
          {showTitle ? "Hide" : "Show"}
        </Button>
      </section>
    </>
  );
};

export default FramerMotionEnterExit;
