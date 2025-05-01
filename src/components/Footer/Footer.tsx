import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_info}>
        <p>© 2025 E-commerce Proyecto Final</p>
        <p>Desarrollado por Walter, Ruth, Paula y Uriel</p>
        <p>
          <a href="/terminos">Términos y condiciones</a>
          <a href="/contacto">Contacto</a>
        </p>
      </div>
      <div className={styles.footer_map}></div>
    </footer>
  );
};

export default Footer;
