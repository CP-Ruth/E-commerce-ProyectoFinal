import { FC } from "react";
import styles from "./OptionCategory.module.css";
import { useNavigate } from "react-router";

interface Prop {
  sexo: string;
  src: string;
  alt: string;
  text: string;
}

const OptionCategory: FC<Prop> = ({ src, alt, text, sexo }) => {
  const navigate = useNavigate();

  const handlerClick = () => {
    navigate(`/productos/${sexo}/${text}`);
  };

  return (
    <article className={styles.container} onClick={handlerClick}>
      <img className={styles.image} src={src} alt={alt} />
      <div className={styles.containerText}>
        <p>{text}</p>
      </div>
    </article>
  );
};

export default OptionCategory;
