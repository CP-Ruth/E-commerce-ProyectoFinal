import { useParams } from "react-router";
import styles from "./ProductCatalog.module.css";
import FiltersProducts from "./FiltersProducts/FiltersProducts";
import Product from "../../components/Product/Product";
import { IoIosOptions } from "react-icons/io";
import { useEffect } from "react";
import { useProductos } from "../../hooks/useProducts";

const ProductCatalog = () => {
  const { type, sexo } = useParams();

  const { detallesProductos, fetchDetallesProductos } = useProductos();

  useEffect(() => {
    fetchDetallesProductos();
  }, []);
  return (
    <section className={styles.containerSection}>
      <h2 className={styles.title}>
        {type} de {sexo}
      </h2>
      <button className={styles.buttonFilter}>
        <IoIosOptions size={25} className={styles.icon} />
        Filtros
      </button>
      <div className={styles.containerProducts}>
        <FiltersProducts />
        <section className={styles.gridContainer}>
          {detallesProductos &&
            detallesProductos.map((dProducto) => (
              <Product detProducto={dProducto} />
            ))}
        </section>
      </div>
    </section>
  );
};

export default ProductCatalog;
