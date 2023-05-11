import Image from "next/image";
import cx from "classnames";

import styles from "./Reference.module.css";

interface ReferenceProps {
  author: string;
  image: string;
  text: string;
  className?: string;
}

const Reference = ({
  author,
  image,
  text,
  className,
}: ReferenceProps): JSX.Element => {
  return (
    <div className={cx(styles.reference, className)}>
      <div className={styles.image}>
        <Image src={image} width={120} height={120} alt={author} />
      </div>
      <blockquote className={styles.quote}>
        <p>{text}</p>
        <cite>{author}</cite>
      </blockquote>
    </div>
  );
};

export default Reference;
