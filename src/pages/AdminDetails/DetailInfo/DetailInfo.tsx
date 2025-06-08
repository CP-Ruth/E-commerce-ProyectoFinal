import { FC } from "react";
import { IDetailsProduct } from "../../../types/IDetailsProduct";
import styles from "./DetailInfo.module.css";
import { IoMdClose } from "react-icons/io";

interface PropsDetailsInfo {
  detalle: IDetailsProduct;
  onClose: () => void;
}

const DetailInfo: FC<PropsDetailsInfo> = ({ detalle, onClose }) => {
  return (
    <div className={styles.modal}>
      <article className={styles.modalInfo}>
        <IoMdClose className={styles.close} size={30} onClick={onClose} />
        <h2>{detalle.producto.nombre}</h2>
        <div className={styles.details}>
          <p>
            <span>Color:</span> {detalle.color}
          </p>
          <p>
            <span>Sexo:</span> {detalle.producto.sexo}
          </p>
          <p>
            <span>Tipo Producto:</span> {detalle.producto.tipoProducto}
          </p>
          <p>
            <span>Precio:</span> ${detalle.precioVenta}
          </p>
          <p>
            <span>Talle:</span>
            {detalle.stocks.map((stock) => stock.talle.name).join(", ")}
          </p>
          <p>
            <span>Stock:</span>
            {detalle.stocks.map((stock) => stock.stock).join(", ")}
          </p>
          <p>
            <span className={styles.img}>Imagenes:</span>
            {detalle.imagenes.map((imagen) => (
              <img src={imagen.url as string} />
            ))}
          </p>
        </div>
      </article>
    </div>
  );
};

export default DetailInfo;
