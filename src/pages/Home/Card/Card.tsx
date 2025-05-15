import { FC } from "react";
import styles from './Card.module.css'

interface PropsCard {
  title: string;
  children?: string;
  image: string;
}

const Card: FC<PropsCard> = ({ title, image, children}) => {
  return (
    <figure className={styles.container}>
      <img className={styles.image} src={image} alt="Persona corriendo" />
      <figcaption className={styles.details}>
        <h3>{title}</h3>
        {children && <p>{children}</p>}
      </figcaption>
    </figure>
  );
};

export default Card;
