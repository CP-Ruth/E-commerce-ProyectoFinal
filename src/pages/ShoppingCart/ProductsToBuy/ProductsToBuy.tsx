import { RiDeleteBin6Line } from "react-icons/ri";
import styles from "./ProductsToBuy.module.css"
import { FC } from "react";
import { IItem } from "../../../types/IOrder";

interface ItemProducto {
  itemProducto:IItem;
}
const ProductsToBuy: FC<ItemProducto> = ({itemProducto}) => {


  return (
    <div className={styles.containerPrincipal}>

      <div className={styles.containerImg}>
        <img src={itemProducto.imagen} alt="imagenProducto" />
      </div>

      <div className={styles.detailProduct}>
        <h4>{itemProducto.nombre}</h4>
        <p>Color: {itemProducto.color}</p>
        <p>Talle: {itemProducto.talle}</p>
        <p>Cantidad: {itemProducto.cantidad}</p>
      </div>

      <div className={styles.priceAndDelete}>
        <div className={styles.price}>
          <p>${itemProducto.precio}</p>
        </div>
        <button><RiDeleteBin6Line /></button>
      </div>

    </div>

  )
}

export default ProductsToBuy;
