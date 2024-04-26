"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button, { ButtonStyles } from "@src/components/Button/Button";

import styles from "./style.module.css";

const FramerMotionEnterExit = () => {
  const [showMessage, setShowMessage] = useState(false);

  return (
    <>
      <section className={styles.section} data-color="pink">
        <AnimatePresence>
          {showMessage && (
            <motion.div
              animate={{ scale: 1, opacity: 1 }}
              initial={{ scale: 0, opacity: 0 }}
              exit={{ scale: 0, opacity: 0 }}
              className={styles.message}
            >
              🔥 Framer Motion 🔥
            </motion.div>
          )}
        </AnimatePresence>
        <Button
          className={styles.toggle}
          buttonStyle={ButtonStyles.WHITE}
          handleClick={() => setShowMessage(!showMessage)}
        >
          {showMessage ? "Hide" : "Show"}
        </Button>
      </section>
    </>
  );
};

export default FramerMotionEnterExit;
