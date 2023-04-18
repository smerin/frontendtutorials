import Button, { ButtonStyles } from "../Button/Button";
import styles from "./HomePage.module.css";

const HomePage = (): JSX.Element => {
  return (
    <div className={styles.homePage}>
      <h1 className={styles.title}>
        Welcome to <span>Frontend</span> Tutorials
      </h1>
      <p className={styles.message}>Website under construction</p>
      <Button buttonStyle={ButtonStyles.WHITE} handleClick={() => {}}>
        Come back soon
      </Button>
    </div>
  );
};

export default HomePage;
