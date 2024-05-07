import Link from "next/link";
import styles from "./style.module.css";

const Playground = () => {
  return (
    <div className={styles.playground}>
      <h1 className={styles.heading}>Playground</h1>
      <ul className={styles.links}>
        <li>
          <Link href="/playground/basic-parallax-banner">
            Basic Parallax Banner
          </Link>
        </li>
        <li>
          <Link href="/playground/parallax-hero">Parallax Hero</Link>
        </li>
        <li>
          <Link href="/playground/enter-exit-transition">
            Enter & Exit Transitions
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Playground;
