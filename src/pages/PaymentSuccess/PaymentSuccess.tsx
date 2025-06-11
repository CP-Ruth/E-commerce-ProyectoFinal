import { useNavigate, useSearchParams } from "react-router";
import styles from "./PaymentSuccess.module.css";
import { GiConfirmed } from "react-icons/gi";
import { useEffect } from "react";
import { editOrdenCompra } from "../../services/ordenCompraService";
import { useAuth } from "../../hooks/useAuth";

const PaymentSuccess = () => {
  const navigate = useNavigate();
  const {userActive, getUserByTokenUser} = useAuth()
  const [searchParams, setSearchParams] = useSearchParams();

  const handleGoHome = () => {
    navigate("/");
  };

  const estimatedDelivery = new Date(
    Date.now() + 5 * 24 * 60 * 60 * 1000
  ).toLocaleDateString("es-ES", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  useEffect(() => {
    getUserByTokenUser()
    if (userActive) {
      editOrdenCompra(userActive?.id!);
    }
  }, [userActive]);

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        {/* Icono de confirmación */}
        <div className={styles.iconSection}>
          <div className={styles.iconContainer}>
            <GiConfirmed size={40} />
          </div>
          <h1 className={styles.title}>¡Compra realizada con éxito!</h1>
          <p className={styles.subtitle}>
            Tu pedido ha sido confirmado y está siendo procesado
          </p>
        </div>
        {/* Detalles del pedido */}
        <div className={styles.orderDetails}>
          <div className={styles.deliverySection}>
            <p className={styles.deliveryLabel}>Entrega estimada:</p>
            <p className={styles.deliveryDate}>{estimatedDelivery}</p>
          </div>
        </div>
        {/* Información adicional */}
        <div className={styles.additionalInfo}>
          <p className={styles.infoText}>
            Si tienes alguna pregunta, puedes contactar con nuestro servicio de
            atención al cliente.
          </p>
        </div>
        <button onClick={handleGoHome} className={styles.homeButton}>
          <span>Volver al inicio</span>
        </button>
      </div>
    </div>
  );
};

export default PaymentSuccess;
