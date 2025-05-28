import styles from "./SliderProducts.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useProductos } from "../../../hooks/useProducts";
import { useEffect } from "react";
import Product from "../../../components/Product/Product";
import { useNavigate } from "react-router";

const SliderProducts = () => {
  const { detallesProductos, fetchDetallesProductos } = useProductos();
  const navigate = useNavigate();

  const handleProductClick = (id: number) => {
    navigate(`/producto/${id}`);
  };

  useEffect(() => {
    fetchDetallesProductos();
  }, []);

  const detProdCalzados = detallesProductos.filter(
    (detPro) => detPro.producto.tipoProducto === "CALZADO"
  );
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
          {detProdCalzados &&
            detProdCalzados.map((dProducto) => (
              <SwiperSlide key={dProducto.id}>
                <Product
                  detProducto={dProducto}
                  onClick={() => handleProductClick(dProducto.id!)}
                />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </section>
  );
};

export default SliderProducts;
