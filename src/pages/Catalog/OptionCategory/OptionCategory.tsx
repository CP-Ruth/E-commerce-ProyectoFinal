import { FC } from "react";
import styles from "./OptionCategory.module.css";

interface Prop {
  src: string;
  alt: string;
  text: string;
}

const OptionCategory: FC<Prop> = ({ src, alt, text }) => {
  return (
    <article className={styles.container}>
      <img className={styles.image} src={src} alt={alt} />
      <div className={styles.containerText}>
        <p>{text}</p>
      </div>
    </article>
  );
};

export default OptionCategory;
