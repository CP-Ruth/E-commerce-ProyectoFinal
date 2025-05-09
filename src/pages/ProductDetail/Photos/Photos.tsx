import styles from "./Photos.module.css"


export const Photos = () => {
  return (
    <div className={styles.containerPrincipal}>
      <img src="src\assets\images\product.png" alt="zapatilla1" />
      <img src="src\assets\images\product.png" alt="zapatilla2" />
      <img src="src\assets\images\product.png" alt="zapatilla3" />
      <img src="src\assets\images\product.png" alt="zapatilla4" />
    </div>
  )
}
