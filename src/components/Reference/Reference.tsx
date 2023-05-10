import Image from "next/image";

import styles from "./Reference.module.css";

interface ReferenceProps {
  author: string;
  image: string;
  text: string;
}

const Reference = ({ author, image, text }: ReferenceProps): JSX.Element => {
  return (
    <div className={styles.reference}>
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
