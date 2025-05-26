import { RiDeleteBin6Line } from "react-icons/ri";
import styles from "./ProductsToBuy.module.css"


//hay que hacerlo un FC que reciba un producto solamente
//este es solo la carta que va a recibir el producto, no lo mapeo acá. Es solo la carta
const ProductsToBuy = () => {
  return (
    <div className={styles.containerPrincipal}>
{/* className={styles.} */}

      <div className={styles.containerImg}>
        <img src="src\assets\images\product.png" alt="imagenProducto" />
      </div>

      
      <div className={styles.detailProduct}>
        <h4>Zatillas urbanas</h4>
        <h4>Modelo -- Para mujer</h4>
        <p>Color: </p>
        <p>Talle: </p>
        <select>
          <option value="1">1</option>
        </select>
      </div>
      
      <div className={styles.priceAndDelete}>
        <div className={styles.price}>
        <p>$30.000</p>
        <p><s>$50.000</s></p> 
        </div>
        <button><RiDeleteBin6Line /></button>
      </div>
      
    </div>
    
  )
}

export default ProductsToBuy;
