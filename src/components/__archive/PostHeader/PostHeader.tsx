import { Post } from "@src/types";

import styles from "./PostHeader.module.css";
import Button from "../../Button/Button";

interface Props {
  categories: string[];
}

const PostHeader = ({ categories }: Props): JSX.Element => {
  return (
    <div className={styles.header}>
      <div className={styles.title}>Blog</div>
      <div className={styles.categories}>
        <Button className={styles.toggle}>Categories</Button>
        <ul className={styles.categories}>
          {categories.map((category) => (
            <li key={category}>{category}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PostHeader;
