import { Link, NavLink } from "react-router";
import styles from "./HeaderAdmin.module.css";
import logo from "../../../assets/svg/myb.svg";
import { FaUser } from "react-icons/fa";
import { useState } from "react";

const HeaderAdmin = () => {
  const [showSub, setShowSub] = useState(false);

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
      <Link className={styles.home} to="/" onClick={() => setShowSub(false)}>
        Volver a Inicio
      </Link>
      <nav className={styles.navegation}>
        <NavLink
          className={({ isActive }) =>
            `${styles.link} ${isActive ? styles.active : ""}`
          }
          to="/administrador/usuarios"
          onClick={() => setShowSub(false)}
        >
          USUARIOS
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            `${styles.link} ${isActive ? styles.active : ""}`
          }
          to="/administrador/productos"
          onClick={() => setShowSub(false)}
        >
          PRODUCTOS
        </NavLink>
        {/* {showSub && (
            <div className={styles.subOption}>
              <NavLink
                className={({ isActive }) =>
                  `${styles.subLink} ${isActive ? styles.select : ""}`
                }
                to="/administrador/productos/calzados"
              >
                CALZADOS
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  `${styles.subLink} ${isActive ? styles.select : ""}`
                }
                to="/administrador/productos/ropa"
              >
                ROPA
              </NavLink>
            </div>
          )} */}
        <NavLink
          className={({ isActive }) =>
            `${styles.link} ${isActive ? styles.active : ""}`
          }
          to="/administrador/pedidos"
          onClick={() => setShowSub(false)}
        >
          PEDIDOS
        </NavLink>

        {/* <Link
          className={`${styles.link} ${active === "usuarios" ? styles.active : ''}`}
          onClick={() => { setActive("usuarios"); setSelect("") }}
          to="/administrador"  >USUARIOS</Link>
        <div className={styles.links}>
          <p className={`${styles.link} ${active === "productos" ? styles.active : ''}`}
            onClick={() => setActive("productos")}
          >PRODUCTOS</p>
          {active === "productos" && (
            <div className={styles.subOption}>
            <Link
              className={`${styles.subLink} ${select === "calzado" ? styles.select : ''}`}
              onClick={() => { setSelect("calzado"); setActive("productos") }}
              to="/administrador/productos/calzados" >CALZADOS</Link>
            <Link
              className={`${styles.subLink} ${select === "ropa" ? styles.select : ''}`}
              onClick={() => { setSelect("ropa"); setActive("productos") }}
              to="/administrador/productos/ropa" >ROPA</Link>
          </div>
          )          }
        </div>
        <Link
          className={`${styles.link} ${active === "pedidos" ? styles.active : ''}`}
          onClick={() => { setActive("pedidos"); setSelect("") }}
          to="/administrador/pedidos" >PEDIDOS</Link> */}
      </nav>
    </header>
  );
};

export default HeaderAdmin;
