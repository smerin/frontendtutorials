import Image from "next/image";
import { Post } from "@src/types";
import PostExcerpt from "@src/components/PostExcerpt/PostExcerpt";
import SubscribeForm from "@src/components/SubscribeForm/SubscribeForm";
import Reference from "@src/components/Reference/Reference";

import styles from "./HomePage.module.css";

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
      <section className={styles.references}>
        <div className={styles.container}>
          <Reference
            author="James Mahy"
            image="/images/james-mahy.jpg"
            text="George’s expertise in front end development really shines
                through. He is a master of CSS, Javascript and React and
                constantly wows me with his animations and attention to detail."
          />
        </div>
      </section>
      <section className={styles.posts}>
        <div className={styles.container}>
          {posts && (
            <div className={styles.posts}>
              {posts.map((post) => (
                <PostExcerpt key={post.slug} post={post} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
