import { Post } from "@src/types";
import { formatDate } from "@src/utils";

import styles from "./PostPage.module.css";

interface Props {
  post: Post;
}

const PostPage = ({ post }: Props): JSX.Element => {
  return (
    <div className={styles.postPage}>
      <div className={styles.header}>
        <div className={styles.headerImage}>
          <img
            src="https://picsum.photos/800/600"
            width={800}
            height={600}
            alt={post.title}
          />
        </div>
        <div className={styles.headerContent}>
          <div className={styles.meta}>{formatDate(post.date)}</div>
          <h1 className={styles.title}>{post.title}</h1>
          <div className={styles.author}>George Smerin</div>
        </div>
      </div>
      <div className={styles.post}>
        <div
          className={styles.content}
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
    </div>
  );
};

export default PostPage;
