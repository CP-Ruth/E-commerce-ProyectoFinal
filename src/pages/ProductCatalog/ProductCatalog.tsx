import { useParams } from "react-router";
import styles from "./ProductCatalog.module.css";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import FiltersProducts from "./FiltersProducts/FiltersProducts";
import Product from "../../components/Product/Product";
import { IoIosOptions } from "react-icons/io";

const ProductCatalog = () => {
  const { type, sexo } = useParams();
  return (

    <section className={styles.containerSection}>
      <h2 className={styles.title}>
        {type} de {sexo}
      </h2>
      <button className={styles.buttonFilter}><IoIosOptions size={25} className={styles.icon} />
              Filtros</button>
      <div className={styles.containerProducts}>
        <FiltersProducts />
        <section className={styles.gridContainer}>
          <Product product={{ nombre: "Producto 1", precio: 345 }} />
          <Product product={{ nombre: "Producto 1", precio: 345 }} />
          <Product product={{ nombre: "Producto 1", precio: 345 }} />
          <Product product={{ nombre: "Producto 1", precio: 345 }} />
          <Product product={{ nombre: "Producto 1", precio: 345 }} />
          <Product product={{ nombre: "Producto 1", precio: 345 }} />
          <Product product={{ nombre: "Producto 1", precio: 345 }} />
          <Product product={{ nombre: "Producto 1", precio: 345 }} />
        </section>
      </div>
    </section>
  );
};

export default ProductCatalog