import styles from "./Header.module.css";
import carrito from "../../assets/svg/shop.svg";
import { Link } from "react-router";
import { useState } from "react";
import { Modal } from "../ModalLoginRegister/Modal";
import logo from "../../assets/images/myb.png";
import menu from "../../assets/svg/menu.svg";

export const Header = () => {
  //Estado para abrir el modal
  const [openModal, setOpenModal] = useState(false);
  //Estado para la vista de la hamburgesa
  const [menuOpen, setMenuOpen] = useState(false);




  return (
    <header className={styles.containerHeader}>
      <button
        className={styles.burgerButton}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <img src={menu} alt="Menu" />
      </button>
      <img src={logo} className={styles.headerLogo} />

      <nav className={styles.headerOptions}>
        <div className={`${styles.headerNavSearch} ${menuOpen ? styles.showMenu : ''}`}>
          <Link to="/">Home</Link>
          <Link to="/catalogo/mujer">Mujer</Link>
          <Link to="/catalogo/hombre">Hombre</Link>
        </div>
        <div className={styles.headerBuyLogin}>
          <Link to="/carrito">
            <img src={carrito} alt="Carrito de compras" />
          </Link>
          <button onClick={() => setOpenModal(true)}>Login</button>
        </div>
      </nav>
      {openModal && <Modal></Modal>}
    </header>
  );
};
