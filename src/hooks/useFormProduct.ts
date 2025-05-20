import { ChangeEvent, useState } from "react";
import { IDetailsProduct } from "../types/IDetailsProduct";

export const useFormProduct = (initialForm: IDetailsProduct) => {
  const [form, setForm] = useState<IDetailsProduct>(initialForm);

  const handlerDetailsChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlerProductChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      producto: {
        ...prev.producto,
        [name]: value,
      },
    }));
  };

  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      producto: {
        ...prev.producto,
        categorias: prev.producto.categorias.map((categoria) =>
          categoria.nombre === name ? { ...categoria, checked } : categoria
        ),
      },
    }));
  };

  return {
    form,
    setForm,
    handlerDetailsChange,
    handlerProductChange,
    handleCheckboxChange,
  };
};
