import { ChangeEvent, FC } from "react";
import { ICategory } from "../../types/IDetailsProduct";

interface PropsCheckbox {
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  categorias: ICategory[];
}

const Checkbox: FC<PropsCheckbox> = ({ name, value, categorias, onChange }) => {
  const id = value.toLowerCase();
  return (
    <>
      <input
        type="checkbox"
        name={name}
        id={id}
        value={value}
        checked={categorias.some((categoria) => categoria.nombre === value)}
        onChange={onChange}
      />
      <label htmlFor={id}>
        {value}
      </label>
    </>
  );
};

export default Checkbox;
