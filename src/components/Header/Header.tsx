import styles from "./Header.module.css";
import carrito from "../../assets/svg/shop.svg";
import { Link } from "react-router";
import { useState } from "react";
import Modal from "../ModalLoginRegister/ModalLoginRegister";
import logo from "../../assets/images/myb.png";
import { IoMenu } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";

const Header = () => {
  //Estado para abrir el modal
  const [openModal, setOpenModal] = useState(false);
  //Estado para la vista de la hamburgesa
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.containerHeader}>
      <img src={logo} className={styles.headerLogo} />

      <nav className={styles.headerOptions}>
        <div
          className={`${styles.headerNavSearch} ${
            menuOpen ? styles.showMenu : ""
          }`}
        >
          <Link to="/">Inicio</Link>
          <Link to="/catalogo/mujer">Mujer</Link>
          <Link to="/catalogo/hombre">Hombre</Link>
          {/**Quitar despues */}
          <Link to="/administrador">Admin</Link>
          <Link to="/producto">detalleProducto</Link>
          
        </div>
        <div className={styles.headerBuyLogin}>
          <Link to="/carrito">
            <img src={carrito} alt="Carrito de compras" />
          </Link>
          <button onClick={() => setOpenModal(true)}>
            <FaRegUser />
          </button>
          <button
            className={styles.burgerButton}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <IoMenu />
          </button>
        </div>
      </nav>
      {openModal && <Modal onClose={() => setOpenModal(false)} />}
    </header>
  );
};

export default Header;
