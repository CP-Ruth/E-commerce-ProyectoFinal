import { useState } from "react";
import { IDetailsProduct } from "../types/IDetailsProduct";
import { getProductsByFilters } from "../services/productService";

export const useFilter = () => {
  const [productos, setProductos] = useState<IDetailsProduct[]>([]);


  const getProducts = async (sexo: String, filter: String) => {
    const response = await getProductsByFilters(
      `sexo=${sexo}${filter && "&tipoProducto=" + filter}`
    );
    setProductos(response);
  };


  return {
    productos,
    getProducts,
  };
};
