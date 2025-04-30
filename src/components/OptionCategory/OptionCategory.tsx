import { FC } from "react";
import styles from "./OptionCategory.module.css";

interface Prop {
  src: string;
  alt: string;
  text: string;
}

export const OptionCategory: FC<Prop> = ({ src, alt, text }) => {
  return (
    <article className={styles.containerOptionCategory}>
      <img className={styles.imageBackgraund} src={src} alt={alt} />
      <p className={styles.text}>{text}</p>
    </article>
  );
};
