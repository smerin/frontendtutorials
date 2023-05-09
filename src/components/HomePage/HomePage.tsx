import { Post } from "@src/types";
import PostExcerpt from "@src/components/PostExcerpt/PostExcerpt";
import Subscribe from "@src/components/Subscribe/Subscribe";

import styles from "./HomePage.module.css";

interface Props {
  posts: Post[];
}

const HomePage = ({ posts }: Props): JSX.Element => {
  return (
    <div className={styles.home}>
      <h1 className={styles.title}>
        Welcome to <span>smerin.io</span>
      </h1>
      <Subscribe />
      {posts && (
        <div className={styles.posts}>
          {posts.map((post) => (
            <PostExcerpt key={post.slug} post={post} />
          ))}
        </div>
      )}
    </div>
  );
};

export default HomePage;
