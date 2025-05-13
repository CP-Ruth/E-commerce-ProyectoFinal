import styles from "./SliderProducts.module.css";
import ImageProduct from "../../../assets/images/product.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useProductos } from "../../../hooks/useProducts";
import { useEffect } from "react";

const SliderProducts = () => {
const { detallesProductos, fetchDetallesProductos } = useProductos();

  useEffect(() => {
    fetchDetallesProductos();
  }, []);
  return (
    <section className={styles.container}>
      <div>
        <Swiper
          modules={[Navigation]}
          spaceBetween={10}
          navigation
          loop={false}
          grabCursor={true}
          breakpoints={{
            320: { slidesPerView: 1 },
            500: { slidesPerView: 2 },
            1000: { slidesPerView: 3 },
            1224: { slidesPerView: 4 },
          }}
        >
          {detallesProductos &&
            detallesProductos.map((dProducto) => (
              <SwiperSlide key={dProducto.id}>
                <div className={styles.card}>
                  <img
                    className={styles.img}
                    src={dProducto.imagenes && dProducto.imagenes.length > 0 ? dProducto.imagenes[0].url : ImageProduct}
                    alt={dProducto.producto?.nombre || "Producto"}
                  />
                  <h3>{dProducto.producto.nombre}</h3>
                  <p>${dProducto.producto.precio_venta}</p>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </section>
  );
};

export default SliderProducts;
