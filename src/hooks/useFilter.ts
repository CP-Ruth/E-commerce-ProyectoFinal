import { useState } from "react";
import { IDetailsProduct } from "../types/IDetailsProduct";
import { getDetailsByFilters } from "../services/detailsService";

export const useFilter = () => {
  const [productos, setProductos] = useState<IDetailsProduct[]>([]);
  //   const [filterProducts, setFilterProducts] = useState<IDetailsProduct[]>([]);

  const getProducts = async (sexo: String, tpProduct: String) => {
    const response = await getDetailsByFilters(
      `sexo=${sexo}${tpProduct && "&tipoProducto=" + tpProduct}`
    );
    setProductos(response);
  };

  

  return {
    productos,
    // filterProducts,
    getProducts,
    // filterByPrice,
    // filterByDescuento,
  };
};
