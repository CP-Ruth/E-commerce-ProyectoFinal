import { FC } from "react";
import styles from "./ProductsToBuy.module.css";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IItem } from "../../../types/IOrder";

interface ItemProducto {
  itemProducto: IItem;
}

const ProductsToBuy: FC<ItemProducto> = ({ itemProducto }) => {
  return (
    <div className={styles.containerPrincipal}>
      <img src={itemProducto.imagen} alt="imagenProducto" />
      <div className={styles.detailProduct}>
        <div className={styles.info}>
          <h4>{itemProducto.nombre}</h4>
          <p>Color: {itemProducto.color}</p>
          <p>Talle: {itemProducto.talle}</p>
          <p>Cantidad: {itemProducto.cantidad}</p>
        </div>
        <div className={styles.priceAndDelete}>
          <div className={styles.price}>
            <p>${itemProducto.precio}</p>
            {/* precio descuento */}
            <p>
              <b>${itemProducto.precio}</b>
            </p>
          </div>
          <button>
            <RiDeleteBin6Line size={30} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductsToBuy;
