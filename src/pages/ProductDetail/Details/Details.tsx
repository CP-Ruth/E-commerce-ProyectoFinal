import { FaCircle } from "react-icons/fa";
import styles from "./Details.module.css";
import { IDetailsProduct } from "../../../types/IDetailsProduct";
import { FC } from "react";

interface PropsDetails {
  product: IDetailsProduct;
}

export const Details: FC<PropsDetails> = ({ product }) => {
  console.log(product);
  return (
    <div className={styles.containerPrincipal}>
      <h2>{product.producto.nombre}</h2>
      <h3>${product.producto.precio_venta}</h3>
      <div className={styles.containerData}>
        <div>
          <p>Color:</p>
          <span>{product.color}</span>
        </div>
        <p>Talle:</p>
        <div className={styles.talleContainer}>
          {product.stocks.map((stock) => (
            <button key={stock.id}>{stock.talle.name}</button>
          ))}
        </div>
        <p>Cantidad:</p>
        <select>
          <option value="">1</option>
          <option value="">2</option>
          <option value="">3</option>
          <option value="">4</option>
        </select>
      </div>
      <div className={styles.carritoButton}>
        <button>AGREGAR AL CARRITO</button>
      </div>
    </div>
  );
};

export default Details;
