import { IoIosOptions } from "react-icons/io";
import styles from "./FiltersProducts.module.css";


const  FiltersProducts = () => {
  return (
        <section className={styles.filterSection}>
          <h3 className={styles.title}>
            <IoIosOptions size={25} className={styles.icon} />
            Filtros
          </h3>
          <div className={styles.filterContainer}>
            <h4 className={styles.subtitle}>Descuento</h4>
            <span>- 25%</span>
            <span>25 - 50%</span>
            <span>50 - 75%</span>
          </div>
          <div className={styles.filterContainer}>
            <h4 className={styles.subtitle}>Precio</h4>
            <span>- 100 mil</span>
            <span>100 - 150 mil</span>
            <span>150 - 200 mil</span>
          </div>
          <div className={styles.filterContainer}>
            <h4 className={styles.subtitle}>Talle</h4>
            <span>35 - 37</span>
            <span>38 - 40</span>
            <span>40 - 42</span>
            <span>+ 42</span>
          </div>
          <div className={styles.filterContainer}>
            <h4 className={styles.subtitle}>Categoria</h4>
            <span>Urbano</span>
            <span>Running</span>
            <span>Entrenamiento</span>
            <span>Futbol</span>
          </div>
        </section>
  )
}

export default FiltersProducts;