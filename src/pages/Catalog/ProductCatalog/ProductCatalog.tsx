import styles from "./ProductCatalog.module.css";
import { IoIosOptions } from "react-icons/io";
import { FC, useEffect, useState } from "react";
import { IDetailsProduct } from "../../../types/IDetailsProduct";
import { getProductsBySexoAndType } from "../../../services/productService";
import FiltersProducts from "../FiltersProducts/FiltersProducts";
import Product from "../../../components/Product/Product";

interface PropsProductCatalog {
  sexo: string | undefined;
  filter: string;
}

const ProductCatalog: FC<PropsProductCatalog> = ({ sexo, filter }) => {
  const [productos, setProductos] = useState<IDetailsProduct[]>([]);

  useEffect(() => {
    const getProducts = async () => {
      const response = await getProductsBySexoAndType(
        `sexo=${sexo}${filter && "&tipoProducto=" + filter}`
      );
      setProductos(response);
    };
    getProducts();
  }, [filter]);

  return (
    <section className={styles.containerSection}>
      <button className={styles.buttonFilter}>
        <IoIosOptions size={25} className={styles.icon} />
        Filtros
      </button>
      <div className={styles.containerProducts}>
        <FiltersProducts />
        <section className={styles.gridContainer}>
          {productos && productos.length > 0 &&
            productos.map((producto) => (
              <Product key={producto.id} detProducto={producto} />
            ))}
        </section>
      </div>
    </section>
  );
};

export default ProductCatalog;
