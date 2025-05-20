import styles from "./RadioInput.module.css";
import Checkbox from "../Checkbox/Checkbox";
import { ChangeEvent, FC } from "react";
import { ICategory } from "../../types/IDetailsProduct";

interface PropsRadioInput {
  name: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  items: string[];
  categorias: ICategory[];
}

const RadioInput: FC<PropsRadioInput> = ({
  name,
  categorias,
  items,
  onChange,
}) => {
  const nameLower = name.toLowerCase();
  return (
    <div className={styles.item}>
      <label htmlFor={nameLower}>{name}: </label>
      <div className={styles.radioContainer}>
        {items.map((item, id) => (
          <Checkbox
            key={id}
            name={nameLower}
            value={item}
            onChange={onChange}
            categorias={categorias}
          />
        ))}
      </div>
    </div>
  );
};

export default RadioInput;
