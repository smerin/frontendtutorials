import { Post } from "@src/types";

import styles from "./PostPage.module.css";

interface Props {
  post: Post;
}

const PostPage = ({ post }: Props): JSX.Element => {
  return (
    <div className={styles.post}>
      <h1 className={styles.title}>{post.title}</h1>
      <div
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </div>
  );
};

export default PostPage;
