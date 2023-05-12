import Link from "next/link";

import styles from "./Header.module.css";

const Header = (): JSX.Element => {
  return (
    <header className={styles.header}>
      <Link href="/">
        <div className={styles.logo}>George Smerin</div>
      </Link>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
