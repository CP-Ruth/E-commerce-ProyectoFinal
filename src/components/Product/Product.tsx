import { FC } from "react";
import styles from "./Product.module.css";
import { IProduct } from "../../types/IProduct";
import ImageProduct from "../../assets/images/product.png";

interface PropsProduct {
  product: IProduct;
}

export const Product: FC<PropsProduct> = ({ product }) => {
  return (
    <article className={styles.product}>
      <img className={styles.productImage} src={ImageProduct} alt="Producto" />
      <h4>{product.nombre}</h4>
      <h5>${product.precio}</h5>
    </article>
  );
};

