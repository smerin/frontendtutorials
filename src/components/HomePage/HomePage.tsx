import Actions from "../Actions/Actions";

import styles from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={styles.home}>
      <div className={styles.image}>
        <img src="/images/george-smerin-camera.jpg" alt="George Smerin" />
      </div>
      <div className={styles.content}>
        <div className={styles.contentInner}>
          <div className={styles.titles}>
            <h1 className={styles.title}>George Smerin</h1>
            <h2 className={styles.subtitle}>Creative Frontend Developer</h2>
          </div>
          <p className={styles.intro}>
            I help frontend developers get better at design, UX and animation so
            that they can stand out and land their first job or promotion.
          </p>
          <Actions />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
