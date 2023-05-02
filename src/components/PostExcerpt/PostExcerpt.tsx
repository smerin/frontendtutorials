import Link from "next/link";
import { Post } from "@src/types";

import styles from "./PostExcerpt.module.css";

interface Props {
  post: Post;
}

const PostExcerpt = ({ post }: Props): JSX.Element => {
  return (
    <article className={styles.postExcerpt}>
      <h2 className={styles.title}>
        <Link href={`/posts/${post.slug}`}>{post.title}</Link>
      </h2>
      <p className={styles.excerpt}>{post.excerpt}</p>
      <Link href={`/posts/${post.slug}`} className={styles.more}>
        Read more
      </Link>
    </article>
  );
};

export default PostExcerpt;
