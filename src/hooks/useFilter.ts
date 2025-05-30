import { useState } from "react";
import { IDetailsProduct } from "../types/IDetailsProduct";
import { getDetailsByFilters } from "../services/detailsService";

//Crear una función generadora de query string
export const buildFilterQuery = (filters: Record<string, any>) => {
  const params = new URLSearchParams();
  Object.entries(filters).forEach(([key, value]) => {
    if (value !== null && value !== undefined && value !== "") {
      params.append(key, value.toString());
    }
  });
  return params.toString();
};

export const useFilter = () => {
  const [productos, setProductos] = useState<IDetailsProduct[]>([]);

  // const getProducts = async (sexo: String, tpProduct: String) => {
  //   const response = await getDetailsByFilters(
  //     `sexo=${sexo}${tpProduct && "&tipoProducto=" + tpProduct}`
  //   );
  //   setProductos(response);
  // };

  
  const getProducts = async (filters: {
    sexo?: String;
    tipoProducto?: String;
    precioMin?: number;
    precioMax?: number;
    descuento?: number;
    talle?: number;
    categoria?: number;
  }) => {
    const query = buildFilterQuery(filters);
    const response = await getDetailsByFilters(query);
    setProductos(response);
  };

  return {
    productos,
    getProducts,
  };
};
