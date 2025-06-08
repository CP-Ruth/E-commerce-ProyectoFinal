import { IoMdClose } from "react-icons/io";
import styles from "./OrderInfo.module.css";
import { IOrderPay } from "../../../types/IOrder";
import { FC } from "react";

interface IOrderInfo {
  pedido: IOrderPay;
  onClose: () => void;
}

const OrderInfo: FC<IOrderInfo> = ({ pedido, onClose }) => {
  console.log(pedido);
  return (
    <div className={styles.modal}>
      <article className={styles.modalInfo}>
        <IoMdClose className={styles.close} size={30} onClick={onClose} />
        <h2>Pedido</h2>
        <div className={styles.details}>
          <p>
            <span>Nro Pedido: </span> {pedido.id}
          </p>
          <p>
            <span>Fecha Compra:</span> {pedido.fechaCompra}
          </p>
          <p>
            <span>Usuario:</span> {pedido.usuario.nombre}{" "}
            {pedido.usuario.apellido}
          </p>
          <p>
            <span>Precio:</span> ${pedido.total}
          </p>
          <p>
            <span>Productos:</span>
            {pedido.detalleOrdenCompras.map((detalleProduct) => (
              <p style={{ display: "inline-block" }} key={detalleProduct.id}>
                {detalleProduct.detalleProducto.producto.nombre}, Cantidad:
                {detalleProduct.cantidad}, Talle: {detalleProduct.talle.name}
              </p>
            ))}
          </p>
        </div>
      </article>
    </div>
  );
};

export default OrderInfo;
