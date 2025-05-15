import { IoIosOptions } from "react-icons/io";
import styles from "./FiltersProducts.module.css";

const FiltersProducts = () => {
  return (
    <section className={styles.filterSection}>
      <h3 className={styles.title}>
        <IoIosOptions size={25} className={styles.icon} />
        Filtros
      </h3>
      <div className={styles.filterContainer}>
        <h4 className={styles.subtitle}>Descuento</h4>
        <label><input type="radio" name="discount" value="10" /> 10%</label>
        <label><input type="radio" name="discount" value="15" /> 15%</label>
        <label><input type="radio" name="discount" value="25" /> 25%</label>
      </div>
      <div className={styles.filterContainer}>
        <h4 className={styles.subtitle}>Precio</h4>
        <label><input type="radio" name="price" value="0-100000" /> Hasta 100 mil</label>
        <label><input type="radio" name="price" value="100000-150000" /> 100 - 150 mil</label>
        <label><input type="radio" name="price" value="150000-200000" /> 150 - 200 mil</label>
      </div>
      <div className={styles.filterContainer}>
        <h4 className={styles.subtitle}>Talle</h4>
        <label><input type="radio" name="size" value="37" /> 37</label>
        <label><input type="radio" name="size" value="38" /> 38</label>
        <label><input type="radio" name="size" value="40" /> 39</label>
        <label><input type="radio" name="size" value="42" /> 40</label>
      </div>
      <div className={styles.filterContainer}>
        <h4 className={styles.subtitle}>Categoria</h4>
        <label><input type="radio" name="category" value="Urbano" /> Urbano</label>
        <label><input type="radio" name="category" value="Running" /> Running</label>
        <label><input type="radio" name="category" value="Entrenamiento" /> Entrenamiento</label>
        <label><input type="radio" name="category" value="Futbol" /> Fútbol</label>
      </div>
    </section>
  )
}

export default FiltersProducts;