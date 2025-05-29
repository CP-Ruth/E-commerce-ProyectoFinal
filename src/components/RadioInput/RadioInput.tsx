import styles from "./RadioInput.module.css";
import Checkbox from "../Checkbox/Checkbox";
import { ChangeEvent, FC, useEffect, useState } from "react";
import { ICategory } from "../../types/IDetailsProduct";
import { getCategorias } from "../../services/categoriaService";

interface PropsRadioInput {
  name: string;
  onChange: (e: ChangeEvent<HTMLInputElement>, item: ICategory) => void;
  categorias: ICategory[];
}

const RadioInput: FC<PropsRadioInput> = ({ name, categorias, onChange }) => {
  const [categoriaList, setCategoriaList] = useState<ICategory[]>([]);
  const nameLower = name.toLowerCase();

  useEffect(() => {
    const getCategories = async () => {
      const categories = await getCategorias();
      setCategoriaList(categories);
    };
    getCategories();
  }, []);
  return (
    <div className={styles.item}>
      <label htmlFor={nameLower}>{name}: </label>
      <div className={styles.radioContainer}>
        {categoriaList && categoriaList.map((item, id) => (
          <Checkbox
            key={id}
            name={nameLower}
            value={item.nombre}
            onChange={(e) => onChange(e, item)}
            categorias={categorias}
          />
        ))}
      </div>
    </div>
  );
};

export default RadioInput;
