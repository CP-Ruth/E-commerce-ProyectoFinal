import { FC } from "react";
import styles from "./Photos.module.css";
import { IImage } from "../../../types/IDetailsProduct";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

interface PropsPhotos {
  photos: IImage[];
}

const Photos: FC<PropsPhotos> = ({ photos }) => {
  return (
    <div className={styles.containerPrincipal}>
      <div className={styles.swiper}>
        <Swiper
          modules={[Navigation]}
          spaceBetween={10}
          navigation
          loop={false}
          grabCursor={true}>
          {photos && photos.map((photo) => (
            <SwiperSlide key={photo.id}>
              <img src={photo.url} alt="Imagen del producto" />
            </SwiperSlide>
          ))
          }
        </Swiper>
      </div>
      {/* <img src={photos[0].url} alt="Imagen del producto" />
      <img src={photos[1].url} alt="Imagen del producto" /> */}
    </div>
  );
};

export default Photos;
