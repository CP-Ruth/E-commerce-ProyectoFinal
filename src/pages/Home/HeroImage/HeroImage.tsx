import { FC, ReactNode } from "react";
import styles from "./HeroImage.module.css";

interface PropsHeroImage {
  title: string;
  image: string;
  children: ReactNode;
}

export const HeroImage: FC<PropsHeroImage> = ({ title, image, children }) => {
  return (
    <section>
      <div className={styles.containerImage}>
        <img className={styles.image} src={image} alt="Personas corriendo" />
      </div>
      <div className={styles.description}>
        <h2>{title}</h2>
        <p>{children}</p>
      </div>
    </section>
  );
};
