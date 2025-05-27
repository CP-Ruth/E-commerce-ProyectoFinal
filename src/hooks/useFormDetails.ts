import { ChangeEvent, useState } from "react";
import { IDetailsProduct } from "../types/IDetailsProduct";

export const useFormDetails = (initialForm: IDetailsProduct) => {
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

  const handlerTalleChange = (
    e: ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const { value } = e.target;
    setForm((prev) => ({
      ...prev,
      stocks: prev.stocks.map((stock, i) =>
        i === index ? { ...stock, talle: { name: value } } : stock
      ),
    }));
  };

  const handlerImageChange = (
    e: ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const { files } = e.target;

    if (files) {
      const file = files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.addEventListener("load", (e) => {
        const url = e.target?.result as string;
        setForm((prev) => ({
          ...prev,
          imagenes: prev.imagenes.map((imagen, i) =>
            i === index ? { ...imagen, url } : imagen
          ),
        }));
      });
    }
  };

  return {
    form,
    setForm,
    handlerDetailsChange,
    handlerStockChange,
    handlerTalleChange,
    handlerImageChange,
  };
};
