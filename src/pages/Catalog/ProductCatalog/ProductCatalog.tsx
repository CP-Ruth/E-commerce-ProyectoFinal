import styles from "./ProductCatalog.module.css";
import { IoIosOptions } from "react-icons/io";
import { FC, useEffect, useState } from "react";
import FiltersProducts from "../FiltersProducts/FiltersProducts";
import Product from "../../../components/Product/Product";
import { useFilter } from "../../../hooks/UseFilter";

interface PropsProductCatalog {
  sexo: String | undefined;
  filter: String;
}

const ProductCatalog: FC<PropsProductCatalog> = ({ sexo, filter }) => {
  const { productos, getProducts } = useFilter();
  const [filters, setFilters] = useState<String[]>([]);

  const handleFilter = (filter: String) => {
    setFilters([...filters, filter]);
  };

  useEffect(() => {
    getProducts(sexo!, filter);
  }, [filter, sexo]);

  return (
    <section className={styles.containerSection}>
      <button className={styles.buttonFilter}>
        <IoIosOptions size={25} className={styles.icon} />
        Filtros
      </button>
      <div className={styles.containerProducts}>
        <FiltersProducts handleFilter={handleFilter} />
        <section className={styles.gridContainer}>
          {productos &&
            productos.length > 0 &&
            productos.map((producto) => (
              <Product key={producto.id} detProducto={producto} />
            ))}
        </section>
      </div>
    </section>
  );
};

export default ProductCatalog;
