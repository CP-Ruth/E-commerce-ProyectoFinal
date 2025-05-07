import styles from "./SliderProducts.module.css";
import { IProduct } from "../../../types/IProduct";
import ImageProduct from "../../../assets/images/product.png";
import { BsArrowLeftCircleFill } from "react-icons/bs";
import { BsArrowRightCircleFill } from "react-icons/bs";
import Product from "../../../components/Product/Product";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const SliderProducts = () => {

  const products: IProduct[] = [
    {
      nombre: "Zapatilla Palermo",
      precio: 139.99,
    },
    {
      nombre: "Zapatilla Speedcat",
      precio: 139.99,
    },
    {
      nombre: "Zapatilla Speedcat",
      precio: 139.99,
    },
    {
      nombre: "Zapatilla 1",
      precio: 139.99,
    },
    {
      nombre: "Zapatilla 2",
      precio: 139.99,
    },
    {
      nombre: "Zapatilla 3",
      precio: 139.99,
    },
    {
      nombre: "Zapatilla 4",
      precio: 139.99,
    },
    {
      nombre: "Zapatilla 5",
      precio: 139.99,
    },
    {
      nombre: "Zapatilla 6",
      precio: 139.99,
    },
  ];

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
            768: { slidesPerView: 3 },
            1224: { slidesPerView: 4 },
            
          }}
        >
          {products &&
            products.length > 0 &&
            products.map((product, index) => (
              <SwiperSlide key={index}>
                <div className={styles.card} >
                <img className={styles.img} src={ImageProduct} alt="Producto" /> {/**Despues cambiarlo */}
                  <h3>{product.nombre}</h3>
                  <p>{product.precio}</p>
                </div>
              </SwiperSlide>
            ))
          }
        </Swiper>
      </div>


      {/* <div className={styles.containerSlider}>
        {products &&
          products.length > 0 &&
          products.map((product) => <Product product={product} />)}
      </div>
      <button className={styles.prevBtn}>
        <BsArrowLeftCircleFill size={40} />
      </button>
      <button className={styles.nextBtn}>
        <BsArrowRightCircleFill size={40} />
      </button> */}
    </section>
  );
};

export default SliderProducts;
