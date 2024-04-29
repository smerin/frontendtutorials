import styles from "./style.module.css";

const ShowHide = ({ showMessage }: { showMessage: boolean }) => {
  return (
    <section className={styles.showHide}>
      {showMessage && <p>🔥 Framer Motion 🔥</p>}
    </section>
  );
};

export default ShowHide;
