import styles from "./HomePage.module.css";

const HomePage = (): JSX.Element => {
  return (
    <div className={styles.homePage}>
      <h1 className={styles.title}>
        Welcome to <span>Frontend</span> Tutorials
      </h1>
      <p className={styles.message}>Website under construction</p>
    </div>
  );
};

export default HomePage;
