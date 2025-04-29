import styles from "./SliderProducts.module.css";
import Product from "../../../components/Product/Product";
import { IProduct } from "../../../types/IProduct";
import { BsArrowLeftCircleFill } from "react-icons/bs";
import { BsArrowRightCircleFill } from "react-icons/bs";

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
      nombre: "Zapatilla Speedcat",
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
  ];

  return (
    <section className={styles.container}>
      <div className={styles.containerSlider}>
        {products &&
          products.length > 0 &&
          products.map((product) => <Product product={product} />)}
      </div>
      <button className={styles.prevBtn}>
        <BsArrowLeftCircleFill size={40} />
      </button>
      <button className={styles.nextBtn}>
        <BsArrowRightCircleFill size={40} />
      </button>
    </section>
  );
};

export default SliderProducts;
