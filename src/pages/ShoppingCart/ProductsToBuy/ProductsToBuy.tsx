import { FC } from "react";
import styles from "./ProductsToBuy.module.css";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IItem } from "../../../types/IOrder";

interface ItemProducto {
  itemProducto: IItem;
  onRemove: (item: IItem) => void;
}

const ProductsToBuy: FC<ItemProducto> = ({ itemProducto, onRemove }) => {
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
            {itemProducto.precioDesc ? (
              <>
                <p>
                  <s>${itemProducto.precioV}</s>
                </p>

                <p>
                  <b>${itemProducto.precioDesc}</b>
                </p>
              </>
            ) : (
              <p>${itemProducto.precioV}</p>
            )}
          </div>
          <button
            className={styles.buttonEliminarProducto}
            onClick={() => onRemove(itemProducto)}
          >
            <RiDeleteBin6Line size={30} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductsToBuy;
