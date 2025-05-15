import { FC } from "react";
import styles from "./OptionCategory.module.css";

interface Prop {
  sexo: string;
  alt: string;
  text: string;
}

const OptionCategory: FC<Prop> = ({ alt, text, sexo }) => {
  // Ya habia hecho esto con las imagenes por parametro, porque lo cambiaron 🫡???
  const getImageClass = () => {
    if (sexo === "mujer" && text === "ropa") return styles.imgWomanClothe;
    if (sexo === "mujer" && text === "calzado") return styles.imgWomanFoot;
    if (sexo === "hombre" && text === "ropa") return styles.imgManClothe;
    if (sexo === "hombre" && text === "calzado") return styles.imgManFoot;
    return "";
  };

  return (
    <article className={styles.container}>
      <div
        className={`${styles.containerOption} ${getImageClass()}`}
        aria-label={alt}
      ></div>
      <p>{text}</p>
    </article>
  );
};

export default OptionCategory;
