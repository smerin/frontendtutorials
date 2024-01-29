import Image from "next/image";
import cx from "classnames";

import styles from "./Reference.module.css";

interface ReferenceProps {
  author: string;
  image?: string;
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
        {image ? (
          <Image src={image} width={120} height={120} alt={author} />
        ) : (
          <svg viewBox="0 0 1200 1200">
            <path d="m1137.6 687.6c-15.602-104.4-104.4-178.8-205.2-183.6 25.199-93.602 86.398-130.8 160.8-152.4 7.1992-2.3984 6-9.6016 6-9.6016l-12-74.398s-1.1992-6-10.801-4.8008c-256.8 28.801-430.8 224.4-398.4 462 29.996 164.4 158.39 228 277.2 211.2 118.8-19.199 200.4-129.6 182.4-248.4zm-819.6-183.6c24-93.602 87.602-130.8 160.8-152.4 7.1992-2.3984 6-9.6016 6-9.6016l-10.801-74.398s-1.1992-6-10.801-4.8008c-256.8 27.598-429.6 223.2-399.6 460.8 31.199 165.6 160.8 229.2 278.4 212.4 118.8-19.199 200.4-129.6 181.2-248.4-15.598-105.6-103.2-180-205.2-183.6z" />
          </svg>
        )}
      </div>
      <blockquote className={styles.quote}>
        <p>{text}</p>
        <cite>{author}</cite>
      </blockquote>
    </div>
  );
};

export default Reference;
