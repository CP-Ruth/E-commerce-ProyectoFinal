import { FC } from "react";
import styles from "./OptionCategory.module.css";
import { useNavigate } from "react-router";

interface Prop {
  sexo: string;
  alt: string;
  text: string;
}

const OptionCategory: FC<Prop> = ({ alt, text, sexo }) => {
  const navigate = useNavigate();

  const handlerClick = () => {
    navigate(`/catalogo/${sexo}/${text}`);
  };

  const getImageClass = () => {
    if (sexo === "mujer" && text === "ropa") return styles.imgWomanClothe;
    if (sexo === "mujer" && text === "calzado") return styles.imgWomanFoot;
    if (sexo === "hombre" && text === "ropa") return styles.imgManClothe;
    if (sexo === "hombre" && text === "calzado") return styles.imgManFoot;
    return "";
  };

  return (
    <article className={styles.container} onClick={handlerClick}>
      <div className={`${styles.containerOption} ${getImageClass()}`} aria-label={alt}>
      </div>
      <p>{text}</p>
    </article>
  );
};

export default OptionCategory;