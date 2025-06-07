import { useNavigate } from "react-router";
import styles from "./PaymentFailure.module.css"
import { BiError } from "react-icons/bi";

const PaymentFailure = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        {/* Icono de confirmación */}
        <div className={styles.iconSection}>
          <div className={styles.iconContainer}>
            <BiError size={40} />
          </div>
          <h1 className={styles.title}>¡Compra rechazada!</h1>
          <p className={styles.subtitle}>
            Tu pedido ha sido rechazado.
          </p>
        </div>
        {/* Información adicional */}
        <button onClick={handleGoHome} className={styles.homeButton}>
          <span>Volver al inicio</span>
        </button>
      </div>
    </div>
  );
};

export default PaymentFailure;
