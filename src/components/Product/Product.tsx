import { FC } from "react";
import styles from "./Product.module.css";
import { IDetailsProduct } from "../../types/IDetailsProduct";
import ImageProduct from "../../assets/images/product.png";

interface PropsProduct {
  detProducto: IDetailsProduct;
  onClick?: () => void;
}

const Product: FC<PropsProduct> = ({ detProducto, onClick }) => {
  return (
    <article className={styles.product} onClick={onClick}>
      <img
        className={styles.productImage}
        src={
          detProducto.imagenes && detProducto.imagenes.length > 0
            ? detProducto.imagenes[0].url
            : ImageProduct
        }
        alt={detProducto.producto.nombre || "Producto"}
      />
      <h4>{detProducto.producto.nombre}</h4>
      <h5>${detProducto.precio.precio_venta}</h5>
    </article>
  );
};

export default Product;
