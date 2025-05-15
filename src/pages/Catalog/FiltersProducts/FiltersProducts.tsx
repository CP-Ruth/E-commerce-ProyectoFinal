import { IoIosOptions } from "react-icons/io";
import styles from "./FiltersProducts.module.css";
import { FC, useEffect, useState } from "react";
import { ICategory, IDiscount } from "../../../types/IDetailsProduct";
import { getDescuentos } from "../../../services/descuentoService";
import { getCategorias } from "../../../services/categoriaService";

interface PropsFiltersProducts {
  handleFilter: (filter: string) => void;
}

const FiltersProducts: FC<PropsFiltersProducts> = ({ handleFilter }) => {
  const [descuentos, setDescuentos] = useState<IDiscount[]>([]);
  const [categorias, setCategorias] = useState<ICategory[]>([]);

  useEffect(() => {
    const getAllDescuentos = async () => {
      const listDescuento = await getDescuentos();
      const listCategorias = await getCategorias();

      if (listDescuento && listCategorias) {
        setDescuentos(listDescuento);
        setCategorias(listCategorias);
      }
    };
    getAllDescuentos();
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
          descuentos.map((descuento) => (
            <label key={descuento.id}>
              <input type="checkbox" name="discount" value={descuento.id} />
              {" " + descuento.porcentaje * 100 + "%"}
            </label>
          ))}
      </div>
      <div className={styles.filterContainer}>
        <h4 className={styles.subtitle}>Precio</h4>
        <label>
          <input type="checkbox" name="price" value="0-100000" /> Hasta 100 mil
        </label>
        <label>
          <input type="checkbox" name="price" value="100000-150000" /> 100 - 150
          mil
        </label>
        <label>
          <input type="checkbox" name="price" value="150000-200000" /> 150 - 200
          mil
        </label>
      </div>
      <div className={styles.filterContainer}>
        <h4 className={styles.subtitle}>Talle</h4>
        <label>
          <input type="checkbox" name="size" value="37" /> 37
        </label>
        <label>
          <input type="checkbox" name="size" value="38" /> 38
        </label>
        <label>
          <input type="checkbox" name="size" value="40" /> 39
        </label>
        <label>
          <input type="checkbox" name="size" value="42" /> 40
        </label>
      </div>
      <div className={styles.filterContainer}>
        <h4 className={styles.subtitle}>Categoria</h4>
        {categorias &&
          categorias.map((categoria) => (
            <label key={categoria.id}>
              <input type="checkbox" name="discount" value={categoria.id} />
              {" " + categoria.nombre}
            </label>
          ))}
      </div>
    </section>
  );
};

export default FiltersProducts;
