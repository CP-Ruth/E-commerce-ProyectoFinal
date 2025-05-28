import styles from "./ProductCatalog.module.css";
import { IoIosOptions } from "react-icons/io";
import { FC, useEffect, useState } from "react";
import FiltersProducts from "../FiltersProducts/FiltersProducts";
import Product from "../../../components/Product/Product";
import { useFilter } from "../../../hooks/useFilter";
import { useNavigate } from "react-router";

interface PropsProductCatalog {
  sexo: String | undefined;
  filter: String;
}

const ProductCatalog: FC<PropsProductCatalog> = ({ sexo, filter }) => {

  const { productos, getProducts } = useFilter();
  
  const [filters, setFilters] = useState<String[]>([]);
  
  const navigate = useNavigate();

  //Redirige a /producto/:id cuando haces clic en un producto.
  const handleProductClick = (id: number) => {
    navigate(`/producto/${id}`);
  };

  const handleFilter = (filter: String) => {
    setFilters([...filters, filter]);
  };

  //Cada vez que cambia el filtro o el sexo, se hace una nueva búsqueda.
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

        {/**Seccion de Filtros */}
        <FiltersProducts handleFilter={handleFilter} />

        {/**Seccion de Productos */}
        <section className={styles.gridContainer}>
          {productos &&
            productos.length > 0 &&
            productos.map((producto) => (
              <Product
                key={producto.id}
                detProducto={producto}
                onClick={() => handleProductClick(producto.id!)
                  //ver esta parte del Id!
                } 
              />
            ))}
        </section>
      </div>
    </section>
  );
};

export default ProductCatalog;
