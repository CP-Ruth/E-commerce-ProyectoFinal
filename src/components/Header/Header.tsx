import styles from "./Header.module.css";
import carrito from "../../assets/svg/shop.svg";
import { Link } from "react-router";
import { useState } from "react";
import { Modal } from "../ModalLoginRegister/Modal";



export const Header = () => {

  const [openModal, setOpenModal] =useState(false);



  return (
    <header className={styles.containerHeader}>
      <img src="/logo.svg" className={styles.headerLogo} />
      <nav className={styles.headerOptions}>
        <div className={styles.headerNavSearch}>
          <Link to="/">Home</Link>
          <Link to="/catalogo/mujer">Mujer</Link>
          <Link to="/catalogo/hombre">Hombre</Link>
        </div>
        <div className={styles.headerBuyLogin}>
          <Link to="/carrito">
            <img src={carrito} alt="Carrito de compras" />
          </Link>
          <button onClick={()=> setOpenModal(true)}>Login</button> 
        </div>
      </nav>
      {openModal && <Modal></Modal>}
    </header>
  );
};
