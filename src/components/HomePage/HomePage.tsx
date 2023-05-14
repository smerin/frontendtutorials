import Image from "next/image";
import { Post } from "@src/types";
import PostExcerpt from "@src/components/PostExcerpt/PostExcerpt";
import SubscribeForm from "@src/components/SubscribeForm/SubscribeForm";
import Reference from "@src/components/Reference/Reference";

import styles from "./HomePage.module.css";
import { ButtonStyles } from "../Button/Button";

interface Props {
  posts: Post[];
}

const HomePage = ({ posts }: Props): JSX.Element => {
  return (
    <div className={styles.home}>
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.newsletter}>
            <h1 className={styles.title}>
              Fine tune your frontend development skills
            </h1>
            <p className={styles.message}>
              Sign up to <strong>The Art of Frontend Development</strong>{" "}
              newsletter, and learn about the finer details of UX, animation,
              typography and more. Each month you’ll get a new idea or technique
              to use in your daily work.
            </p>
            <SubscribeForm />
          </div>
        </div>
      </section>
      <div className={styles.references}>
        <div className={styles.container}>
          <Reference
            className={styles.reference}
            author="James Mahy"
            text="George’s expertise in front end development really shines
                through. He is a master of CSS, Javascript and React and
                constantly wows me with his animations and attention to detail."
          />
        </div>
      </div>
      <div className={styles.about}>
        <div className={styles.container}>
          <h2>About me</h2>
          <p>
            I’ve been a website and app developer for over 15 years, working for
            a wide range of clients including Warner Bros, NatWest, Accenture
            and The Royal Navy. My passion for design and animation is always at
            the heart of my work. I started this website and newsletter to
            showcase my work and also help other frontend developers add a
            little creative flair to their toolkit.
          </p>
        </div>
      </div>
      <section className={styles.posts}>
        <div className={styles.container}>
          <div className={styles.postsHeader}>
            <h2>The Art of Frontend Development</h2>
            <p>A monthly newsletter by George Smerin</p>
          </div>
          {posts && (
            <div className={styles.postExcerpts}>
              {posts.map((post) => (
                <PostExcerpt key={post.slug} post={post} />
              ))}
            </div>
          )}
        </div>
      </section>
      <section className={styles.signup}>
        <div className={styles.container}>
          <h2>A monthly newsletter to help you on your development journey</h2>
          <p>
            Subscribe to The Art of Frontend Development and get regular
            actionable tips on becoming a more creative frontend developer.
          </p>
          <SubscribeForm buttonStyle={ButtonStyles.CHARCOAL} />
        </div>
      </section>
    </div>
  );
};

export default HomePage;
