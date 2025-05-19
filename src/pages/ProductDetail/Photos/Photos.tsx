import { FC } from "react";
import styles from "./Photos.module.css";
import { IImage } from "../../../types/IDetailsProduct";

interface PropsPhotos {
  photos: IImage[];
}

const Photos: FC<PropsPhotos> = ({ photos }) => {
  return (
    <div className={styles.containerPrincipal}>
      <img src={photos[0].url} alt="Imagen del producto" />
      <img src={photos[1].url} alt="Imagen del producto" />
    </div>
  );
};

export default Photos;
