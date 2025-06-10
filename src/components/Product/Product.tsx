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
            ? (detProducto.imagenes[0].url as string)
            : (ImageProduct as string)
        }
        alt={detProducto.producto.nombre || "Producto"}
      />
      <h4 className={styles.title}>{detProducto.producto.nombre}</h4>
      {detProducto.descuento?.activo ? (
        <>
          <h5 style={{ textDecoration: "line-through" }}>
            ${detProducto.precioVenta}
          </h5>
          <h4>
            $
            {detProducto.precioVenta -
              (detProducto.precioVenta * detProducto.descuento.porcentaje) /
              100}
          </h4>
        </>
      ) : (
        <h4>${detProducto.precioVenta}</h4>
      )}
    </article>
  );
};

export default Product;
