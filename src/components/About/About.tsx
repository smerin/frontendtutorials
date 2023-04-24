import Link from "next/link";
import Header from "@src/components/Header/Header";
import Button, { ButtonStyles } from "@src/components/Button/Button";
import styles from "./About.module.css";

const About = (): JSX.Element => {
  return (
    <>
      <Header />
      <div className={styles.about}>
        <h1 className={styles.title}>About this website</h1>
        <p className={styles.message}>
          I am setting up this site as a showcase of what I consider to be best
          practices in frontend development. There are many aspects involved in
          becoming a good frontend developer, including UX, accessibility,
          typography and animation. I aim to cover all of these topics and more
          in upcoming blog posts and tutorials, and hope they provide a good
          resource for up and coming developers wanting to hone their skills.
        </p>
        <p className={styles.message}>
          Please <Link href="/contact">get in touch</Link> with any feedback or
          suggestions for topics that would be useful and relevant to this site.
        </p>
        <div className={styles.buttons}>
          <Link href="https://www.linkedin.com/in/smerin/" target="_blank">
            <Button buttonStyle={ButtonStyles.WHITE} handleClick={() => {}}>
              LinkedIn
            </Button>
          </Link>
          <Link href="mailto:gsmerin@gmail.com" target="_blank">
            <Button buttonStyle={ButtonStyles.WHITE} handleClick={() => {}}>
              Email
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default About;
