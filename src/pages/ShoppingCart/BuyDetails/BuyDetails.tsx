import { FC } from "react";
import styles from "./BuyDetails.module.css";
import { IItem } from "../../../types/IOrder";

interface PropsBuyDetails {
  products: IItem[];
  onSubmit: (totalCost: number) => void;
}

const BuyDetails: FC<PropsBuyDetails> = ({ products, onSubmit }) => {
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
        <p>Total estimado: ${total}</p>
      </div>
      <div className={styles.containerButton}>
        <button onClick={() => onSubmit(total)}>Proceder al pago </button>
      </div>
    </div>
  );
};

export default BuyDetails;
