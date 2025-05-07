import { Link } from "react-router";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_one}>
        <img className={styles.logo} src="/logo.svg" alt="logo" />
        <div className={styles.footer_info}>
          <p>© 2025 E-commerce Proyecto Final</p>
          <p>Desarrollado por Walter, Ruth, Paula y Uriel</p>
          <a href="/terminos">Términos y condiciones</a>
          <a href="/contacto">Contacto</a>
        </div>
      </div>
      <div className={styles.ul}>
        <Link to="/">Inicio</Link>
        <Link to="/catalogo/mujer">Mujer</Link>
        <Link to="/catalogo/hombre">Hombre</Link>
      </div>
    </footer>
  )
};

export default Footer;