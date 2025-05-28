import { ChangeEvent, useState } from "react";
import { ICategory, IProduct } from "../types/IDetailsProduct";

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
    item: ICategory
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: prev.categorias.find((categoria) => categoria.nombre === value)
        ? prev.categorias.filter(
            (categoria) => categoria.nombre !== value
          )
        : [...prev.categorias, item],
    }));
  };

  return {
    form,
    setForm,
    handlerFormChange,
    handlerCategoriasChange,
  };
};
