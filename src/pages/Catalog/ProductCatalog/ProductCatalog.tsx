import styles from "./ProductCatalog.module.css";
import { IoIosOptions } from "react-icons/io";
import { FC, RefObject, useEffect, useState } from "react";
import FiltersProducts from "../FiltersProducts/FiltersProducts";
import Product from "../../../components/Product/Product";
import { useFilter } from "../../../hooks/useFilter";
import { useNavigate } from "react-router";
import { Filtros } from "../../../types/IFiltros";
import wrong from "../../../assets/images/wrong.svg";

interface PropsProductCatalog {
  sexo: String | undefined;
  filter: String;
  ref: RefObject<HTMLDivElement>;
}

const ProductCatalog: FC<PropsProductCatalog> = ({ sexo, filter, ref }) => {
  const { productos, getProducts } = useFilter();
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState<Filtros>({
    sexo: sexo,
    tipoProducto: filter,
  });
  const navigate = useNavigate();

  const toggleFilters = () => {
    setShowFilters((prev) => !prev);
  };

  const handleProductClick = (id: number) => {
    navigate(`/producto/${id}`);
  };

  const handleFilter = (key: keyof Filtros, value: any) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  useEffect(() => {
    setFilters((prev) => {
      if (prev.sexo === sexo && prev.tipoProducto === filter) return prev;
      return { ...prev, sexo, tipoProducto: filter };
    });
  }, [sexo, filter]);

  useEffect(() => {
    getProducts(filters);
  }, [filters]);

  return (
    <section className={styles.containerSection} ref={ref}>
      <div className={styles.movile}>
        <button className={styles.buttonFilter} onClick={toggleFilters}>
          <IoIosOptions size={25} className={styles.icon} />
          Filtros
        </button>
        <div className={styles.containerProducts}>
          {showFilters && (
            <FiltersProducts
              handleFilter={handleFilter}
              filter={(filters.tipoProducto as string) || null}
            />
          )}
          <section className={styles.gridContainer}>
            {productos && productos.length > 0 ? (
              productos.map((producto) => (
                <Product
                  key={producto.id}
                  detProducto={producto}
                  onClick={() => handleProductClick(producto.id!)}
                />
              ))
            ) : (
              <div className={styles.noProducts}>
                <img src={wrong} alt="" />
                No hay productos del filtro/s seleccionado/s
              </div>
            )}
          </section>
        </div>
      </div>

      <div className={styles.noMovile}>
        <div className={styles.containerProducts}>
          <FiltersProducts
            handleFilter={handleFilter}
            filter={(filters.tipoProducto as string) || null}
          />
          <section className={styles.gridContainer}>
            {productos && productos.length > 0 ? (
              productos.map((producto) => (
                <Product
                  key={producto.id}
                  detProducto={producto}
                  onClick={() => handleProductClick(producto.id!)}
                />
              ))
            ) : (
              <div className={styles.noProducts}>
                <img src={wrong} alt="" />
                No hay productos del filtro/s seleccionado/s
              </div>
            )}
          </section>
        </div>
      </div>
    </section>
  );
};

export default ProductCatalog;
