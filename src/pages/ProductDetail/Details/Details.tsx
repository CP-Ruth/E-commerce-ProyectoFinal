import { FaCircle } from "react-icons/fa"
import styles from "./Details.module.css"

export const Details = () => {
  return (
    <div className={styles.containerPrincipal}>
      
      <h2>NombreZapatilla</h2>
      <h3>$20.000</h3>
      <div className={styles.containerData}>
        <p>Articulo:</p>
        <p>Color: <FaCircle /> <FaCircle /> <FaCircle /></p> {/* Cambia de color segun la zapatila? */}

        <p>Talle:</p>
        <div className={styles.talleContainer}>
          <button>talle</button>
          <button>talle</button>
        </div>

        <p>Cantidad:</p>
        <select >
          <option value="">1</option>
        </select>
      </div>
      <div className={styles.carritoButton}>
        <button>AGREGAR AL CARRITO</button>

      </div>
    </div>
  )
}

export default Details;