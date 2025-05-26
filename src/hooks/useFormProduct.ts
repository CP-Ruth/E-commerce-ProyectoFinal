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
    const { value } = e.target;
    setForm((prev) => ({
      ...prev,
      producto: {
        ...prev.producto,
        categorias: prev.producto.categorias.find((categoria) => categoria.nombre === value)
          ? prev.producto.categorias.filter((categoria) => categoria.nombre !== value)
          : [...prev.producto.categorias, { nombre: value }],
      },
    }));
  };

  const handlerStockChange = (
    e: ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const { value } = e.target;
    setForm((prev) => ({
      ...prev,
      stocks: prev.stocks.map((stock, i) =>
        i === index ? { ...stock, stock: Number(value) } : stock
      ),
    }));
  };

  const handlerTalleChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const { value } = e.target;
    setForm((prev) => ({
      ...prev,
      stocks: prev.stocks.map((stock, i) =>
        i === index ? { ...stock, talle: { name: value } } : stock
      ),
    }));
  };

  const handlerImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;

    if (files) {
      const file = files[0];
      const url = URL.createObjectURL(file);
      setForm((prev) => ({
        ...prev,
        imagenes: [...prev.imagenes, { url }],
      }));
    }
  };

  return {
    form,
    setForm,
    handlerDetailsChange,
    handlerProductChange,
    handleCheckboxChange,
    handlerStockChange,
    handlerTalleChange,
    handlerImageChange,
  };
};
