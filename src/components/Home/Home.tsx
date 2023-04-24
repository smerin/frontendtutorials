import Button, { ButtonStyles } from "../Button/Button";
import Header from "@src/components/Header/Header";
import styles from "./Home.module.css";

const Home = (): JSX.Element => {
  return (
    <>
      <Header />
      <div className={styles.home}>
        <h1 className={styles.title}>
          Welcome to <span>Frontend</span> Tutorials
        </h1>
        <p className={styles.message}>Website under construction</p>
        <Button buttonStyle={ButtonStyles.WHITE} handleClick={() => {}}>
          Come back soon
        </Button>
      </div>
    </>
  );
};

export default Home;
