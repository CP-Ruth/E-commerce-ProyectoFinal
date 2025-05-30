import styles from "./ProductCatalog.module.css";
import { IoIosOptions } from "react-icons/io";
import { FC, useEffect, useState } from "react";
import FiltersProducts from "../FiltersProducts/FiltersProducts";
import Product from "../../../components/Product/Product";
import { useFilter } from "../../../hooks/useFilter";
import { useNavigate } from "react-router";
import { Filtros } from "../../../types/IFiltros"
interface PropsProductCatalog {
  sexo: string | undefined;
  filter: String;
}

const ProductCatalog: FC<PropsProductCatalog> = ({ sexo, filter }) => {

  const { productos, getProducts } = useFilter();

  const navigate = useNavigate();
  //Estado de filtros como objeto, inicializando sexo y tipoProducto
  const [filters, setFilters] = useState<Filtros>({
    sexo: sexo,
    tipoProducto: filter,
  });

  useEffect(() => {
    setFilters((prev) => {
      if (prev.sexo === sexo && prev.tipoProducto === filter) return prev;
      return { ...prev, sexo, tipoProducto: filter };
    });
  }, [sexo, filter]);

  //Cada vez que cambia el filtro, se hace una nueva búsqueda.
  useEffect(() => {
    getProducts(filters);
  }, [filters]);

  //Redirige a /producto/:id cuando haces clic en un producto.
  const handleProductClick = (id: number) => {
    navigate(`/producto/${id}`);
  };

  // Manejo cambios en los filtros (desde FiltersProducts)
  const handleFilter = (key: keyof Filtros, value: any) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  console.log(filters)
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
