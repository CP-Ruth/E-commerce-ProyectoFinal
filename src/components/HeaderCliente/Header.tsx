import styles from "./Header.module.css";
import carrito from "../../../assets/icons/shop.svg";
import { IoMenuOutline } from "react-icons/io5";

export const Header = () => {
  return (
    <div className={styles.containerHeader}>
      /* si es m */
      {<IoMenuOutline />}
      <img src="/logo.svg" className={styles.headerLogo} />
      <div className={styles.headerOptions}>
        <div className={styles.headerNavSearch}>
          <a href="">Home</a>
          <a href="">Mujer</a>
          <a href="">Hombre</a>
        </div>
        <div className={styles.headerBuyLogin}>
          <button>
            <img src={carrito} alt="Carrito de compras" />
          </button>
          <button>Login</button>
        </div>
      </div>
    </div>
  );
};
