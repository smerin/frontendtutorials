import { Post } from "@src/types";
import { formatDate } from "@src/utils";

import styles from "./PostPage.module.css";

interface Props {
  post: Post;
}

const PostPage = ({ post }: Props): JSX.Element => {
  return (
    <div className={styles.post}>
      <div className={styles.meta}>{formatDate(post.date)}</div>
      <h1 className={styles.title}>{post.title}</h1>
      <div
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </div>
  );
};

export default PostPage;
