import styles from "./ProductToBuy.module.css";
import Product from "../../../assets/images/product.png";
import { FaRegTrashAlt } from "react-icons/fa";

const ProductsToBuy = () => {
  return (
    <article className={styles.product}>
      <img src={Product} alt="Image del producto" />
      <div className={styles.details}>
        <h3>Texto de prueba</h3>
        <h3>Modelo: Mujer</h3>
        <span>Color: </span>
        <span>Talle: </span>
        <select className={styles.select} name="cantidad">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>
      <div className={styles.amount}>
        <div>
          <span>$30.000</span>
          <span>$40.000</span>
        </div>
        <FaRegTrashAlt size={30} />
      </div>
    </article>
  );
};

export default ProductsToBuy;
