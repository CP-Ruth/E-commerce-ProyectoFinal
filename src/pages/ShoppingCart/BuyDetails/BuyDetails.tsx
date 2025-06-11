import { FC, ReactNode } from "react";
import styles from "./BuyDetails.module.css";
import { IItem } from "../../../types/IOrder";

interface PropsBuyDetails {
  products: IItem[];
  render: (totalCost: number) => ReactNode;
}

const BuyDetails: FC<PropsBuyDetails> = ({
  products,
  render,
}) => {
  const subtotal = products.reduce(
    (acc, item) => acc + (item.precioDesc || item.precioV) * item.cantidad,
    0
  );
  const costoEnvio = subtotal > 150000 ? subtotal * 0.02 : 0;
  const total = subtotal + costoEnvio;

  return (
    <div className={styles.containerPrincipal}>
      <div className={styles.details}>
        <p>Subtotal: ${subtotal}</p>
        <p>Envio: {costoEnvio === 0 ? "Gratuito" : `$${costoEnvio}`}</p>
        <p>Metodos de pago: Tarjeta de Debito</p>
        <p>Total estimado: <span style={{ fontWeight: "bold", color: "green" }}>${total}</span></p>
      </div>
      <div className={styles.containerButton}>
        {render(total)}
      </div>
    </div>
  );
};

export default BuyDetails;
