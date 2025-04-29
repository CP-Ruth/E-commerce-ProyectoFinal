import styles from './Footer.module.css'

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_info}>
      <p>UTN - Facultad Regional Mendoza</p>
      <p>Terminos y condiciones</p>
      <p>Politicas de privacidad</p>
      <p>@MATE Y TORTITAS 2025. Todos los derechos reservados.</p>
    
      </div>
      <div className={styles.footer_map}></div>
      </footer>
  )
}
