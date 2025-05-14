import { FC } from "react";
import styles from "./Product.module.css";
import { DetalleProducto } from "../../types/IProduct";
import ImageProduct from "../../assets/images/product.png";

interface PropsProduct {
  detProducto: DetalleProducto;
}

const Product: FC<PropsProduct> = ({ detProducto }) => {
  return (
    <article className={styles.product}>
      <img className={styles.productImage} 
      src={detProducto.imagenes && detProducto.imagenes.length > 0 ? detProducto.imagenes[0].url : ImageProduct}
      alt={detProducto.producto.nombre || "Producto"}
      />
      <h4>{detProducto.producto.nombre}</h4>
      <h5>${detProducto.producto.precio_venta}</h5>
    </article>
  );
};

export default Product;
