import styles from "./SliderProducts.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useEffect, useState } from "react";
import Product from "../../../components/Product/Product";
import { useNavigate } from "react-router";
import { getDetailsByFilters } from "../../../services/detailsService";
import { IDetailsProduct } from "../../../types/IDetailsProduct";

const SliderProducts = () => {
  const [productosCalzado, setProductosCalzado] = useState<IDetailsProduct[]>();
  const navigate = useNavigate();

  const handleProductClick = (id: number) => {
    navigate(`/producto/${id}`);
  };

  useEffect(() => {
    const getProducts = async () => {
      const response = await getDetailsByFilters("tipoProducto=CALZADO");
      setProductosCalzado(response);
    };
    getProducts();
  }, []);

  return (
    <section className={styles.swiper}>
      <Swiper
        modules={[Navigation]}
        spaceBetween={10}
        navigation
        loop={true}
        grabCursor={true}
        breakpoints={{
          400: { slidesPerView: 1 },
          600: { slidesPerView: 2 },
          1000: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
      >
        {productosCalzado &&
          productosCalzado.map((dProducto) => (
            <SwiperSlide key={dProducto.id}>
              <Product
                detProducto={dProducto}
                onClick={() => handleProductClick(dProducto.id!)}
              />
            </SwiperSlide>
          ))}
      </Swiper>
    </section>
  );
};

export default SliderProducts;
