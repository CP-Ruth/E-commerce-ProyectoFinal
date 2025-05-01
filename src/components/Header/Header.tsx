import styles from "./Header.module.css";
import carrito from "../../assets/svg/shop.svg";

const Header = () => {
  return (
    <header className={styles.containerHeader}>
      <img src="/logo.svg" className={styles.headerLogo} />
      <nav className={styles.headerOptions}>
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
      </nav>
    </header>
  );
};

export default Header