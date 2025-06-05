import styles from "./BuyDetails.module.css";

const BuyDetails = () => {
  //Recibimos el local storage
  //const currentCart = JSON.parse(localStorage.getItem("cart") || "[]");


  return (
    <div className={styles.containerPrincipal}>
      <div className={styles.details}>
        <p>Subtotal: </p>
        <p>Envio: </p>
        <p>Metodos de pago: </p>
        <p>Total estimado: </p>
      </div>
      <div className={styles.containerButton}>
        <button>Proceder al pago </button>
      </div>
    </div>
  );
};

export default BuyDetails;
