import { IoIosOptions } from "react-icons/io";
import styles from "./FiltersProducts.module.css";
import { FC, useEffect, useState } from "react";
import { ICategory, IDiscount, ITalle } from "../../../types/IDetailsProduct";
import { getDescuentos } from "../../../services/descuentoService";
import { getCategorias } from "../../../services/categoriaService";
import { Filtros } from "../../../types/IFiltros";
import { getTalles } from "../../../services/tallesService";

interface PropsFiltersProducts {
  handleFilter: (key: keyof Filtros, value: any) => void;
  filter: string | null;
}

const FiltersProducts: FC<PropsFiltersProducts> = ({
  handleFilter,
  filter,
}) => {
  const [descuentos, setDescuentos] = useState<IDiscount[]>([]);
  const [categorias, setCategorias] = useState<ICategory[]>([]);
  const [talles, setTalles] = useState<ITalle[]>([]);

  const [selectedFilters, setSelectedFilters] = useState<Partial<Filtros>>({});

  const toggleFilter = (key: keyof Filtros, value: any) => {
    const isSelected = selectedFilters[key] === value;
    const newFilters = { ...selectedFilters };

    if (isSelected) {
      delete newFilters[key];
      handleFilter(key, null); // Deseleccionar
    } else {
      newFilters[key] = value;
      handleFilter(key, value); // Seleccionar
    }
    setSelectedFilters(newFilters);
  };

  const togglePriceRange = (range: string) => {
    const [min, max] = range.split("-").map(Number);
    const isSelected =
      selectedFilters.precioMin === min && selectedFilters.precioMax === max;

    const newFilters = { ...selectedFilters };

    if (isSelected) {
      //Eliminamod los atributos precioMin y precioMax del objeto newFilter
      delete newFilters.precioMin;
      delete newFilters.precioMax;
      handleFilter("precioMin", null);
      handleFilter("precioMax", null);
    } else {
      newFilters.precioMin = min;
      newFilters.precioMax = max;
      handleFilter("precioMin", min);
      handleFilter("precioMax", max);
    }

    setSelectedFilters(newFilters);
  };

  useEffect(() => {
    const getAll = async () => {
      const listDescuento = await getDescuentos();
      const listCategorias = await getCategorias();

      const listTalles = await getTalles("");
      if (listDescuento) setDescuentos(listDescuento);
      if (listCategorias) setCategorias(listCategorias);
      if (listTalles) setTalles(listTalles);
    };
    getAll();
  }, []);

  return (
    <section className={styles.filterSection}>
      <h3 className={styles.title}>
        <IoIosOptions size={25} className={styles.icon} />
        Filtros
      </h3>
      <div className={styles.filterContainer}>
        <h4 className={styles.subtitle}>Descuentos</h4>
        {descuentos &&
          descuentos.map((descuento) => {
            if (descuento.activo) {
              return (
                <label key={descuento.id}>
                  <input
                    type="checkbox"
                    checked={selectedFilters.descuento === descuento.id}
                    onChange={() => toggleFilter("descuento", descuento.id)}
                  />
                  {" " + descuento.porcentaje + "%"}
                </label>
              );
            }
          })}
      </div>

      <div className={styles.filterContainer}>
        <h4 className={styles.subtitle}>Talles</h4>
        {filter ? (
          // Si hay filtro (ropa o calzado), mostramos solo los talles correspondientesAdd commentMore actions
          talles.map((talle) => {
            if (filter === "ropa" && talle.name.match(/^[A-Z]+$/)) {
              return (
                <label key={talle.id}>
                  <input
                    type="checkbox"
                    checked={selectedFilters.talle === talle.id}
                    onChange={() => toggleFilter("talle", talle.id)}
                  />
                  {talle.name}
                </label>
              );
            } else if (filter !== "ropa" && talle.name.match(/^[0-9]{2}$/)) {
              return (
                <label key={talle.id}>
                  <input
                    type="checkbox"
                    checked={selectedFilters.talle === talle.id}
                    onChange={() => toggleFilter("talle", talle.id)}
                  />
                  {talle.name}
                </label>
              );
            }
            return null;
          })
        ) : (
          // Si NO hay filtro, mostramos talles agrupados por tipo
          <div className={styles.containerTalles}>
            <div>
              <h5
                style={{ fontSize: "16px", marginBottom: "5px" }}
                className={styles.subsubtitle}
              >
                Calzados
              </h5>
              {talles
                .filter((t) => t.name.match(/^[0-9]{2}$/))
                .map((talle) => (
                  <label key={talle.id}>
                    <input
                      type="checkbox"
                      checked={selectedFilters.talle === talle.id}
                      onChange={() => toggleFilter("talle", talle.id)}
                    />
                    {talle.name}
                  </label>
                ))}
            </div>
            <div>
              <h5
                style={{ fontSize: "16px", marginBottom: "5px" }}
                className={styles.subsubtitle}
              >
                Ropa
              </h5>
              {talles
                .filter((t) => t.name.match(/^[A-Z]+$/))
                .map((talle) => (
                  <label key={talle.id}>
                    <input
                      type="checkbox"
                      checked={selectedFilters.talle === talle.id}
                      onChange={() => toggleFilter("talle", talle.id)}
                    />
                    {talle.name}
                  </label>
                ))}
            </div>
          </div>
        )}
      </div>
      <div className={styles.filterContainer}>
        <h4 className={styles.subtitle}>Categoria</h4>
        {categorias.map((categoria) => (
          <label key={categoria.id}>
            <input
              type="checkbox"
              checked={selectedFilters.categoria === categoria.id}
              onChange={() => toggleFilter("categoria", categoria.id)}
            />
            {categoria.nombre}
          </label>
        ))}
      </div>
    </section>
  );
};

export default FiltersProducts;
