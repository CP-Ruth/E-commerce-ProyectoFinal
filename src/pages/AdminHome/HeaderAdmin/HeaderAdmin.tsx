import { Link, NavLink } from "react-router";
import styles from "./HeaderAdmin.module.css";
import logo from "../../../assets/svg/myb.svg";
import { FaUser } from "react-icons/fa";

const HeaderAdmin = () => {
  return (
    <header className={styles.header}>
      <div className={styles.containerHeader}>
        <div>
          <img src={logo} alt="Logo" className={styles.logo} />
        </div>
        <p>
          Admin <FaUser />
        </p>
      </div>
      <Link className={styles.home} to="/">
        Volver a Inicio
      </Link>
      <nav className={styles.navegation}>
        <NavLink
          className={({ isActive }) =>
            `${styles.link} ${isActive ? styles.active : ""}`
          }
          to="/administrador/usuarios"
        >
          USUARIOS
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            `${styles.link} ${isActive ? styles.active : ""}`
          }
          to="/administrador/detalles"
        >
          VARIANTES PRODUCTOS
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `${styles.link} ${isActive ? styles.active : ""}`
          }
          to="/administrador/productos"
        >
          PRODUCTOS
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `${styles.link} ${isActive ? styles.active : ""}`
          }
          to="/administrador/pedidos"
        >
          PEDIDOS
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `${styles.link} ${isActive ? styles.active : ""}`
          }
          to="/administrador/categorias"
        >
          CATEGORIAS
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `${styles.link} ${isActive ? styles.active : ""}`
          }
          to="/administrador/descuentos"
        >
          DESCUENTOS
        </NavLink>
      </nav>
    </header>
  );
};

export default HeaderAdmin;
