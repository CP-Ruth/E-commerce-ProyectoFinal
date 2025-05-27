import { ChangeEvent, useState } from "react";
import { IProduct } from "../types/IDetailsProduct";

export const useFormProduct = (initialForm: IProduct) => {
  const [form, setForm] = useState<IProduct>(initialForm);

  const handlerFormChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlerCategoriasChange = (
    e: ChangeEvent<HTMLInputElement>,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: prev.categorias.find((categoria) => categoria.nombre === value)
        ? prev.categorias.filter(
            (categoria) => categoria.nombre !== value
          )
        : [...prev.categorias, { nombre: value }],
    }));
  };

  return {
    form,
    setForm,
    handlerFormChange,
    handlerCategoriasChange,
  };
};
