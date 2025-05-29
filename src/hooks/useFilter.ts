import { useState } from "react";
import { IDetailsProduct } from "../types/IDetailsProduct";
import { getDetailsByFilters } from "../services/detailsService";

export const useFilter = () => {
  const [productos, setProductos] = useState<IDetailsProduct[]>([]);
  //   const [filterProducts, setFilterProducts] = useState<IDetailsProduct[]>([]);

  const getProducts = async (sexo: String, filter: String) => {
    const response = await getDetailsByFilters(
      `sexo=${sexo}${filter && "&tipoProducto=" + filter}`
    );
    setProductos(response);
  };

  //   const filterByPrice = (minPrice: number, maxPrice: number) => {
  //     const filteredProducts = productos.filter(
  //       ({ producto: { precio_venta } }) =>
  //         precio_venta <= maxPrice && precio_venta >= minPrice
  //     );
  //     setFilterProducts(filteredProducts);
  //   };

  //   const filterByDescuento = (id: number) => {
  //     const filteredProducts = productos.filter(
  //       ({ descuento }) => descuento.id === id
  //     );
  //     setFilterProducts(filteredProducts);
  //   };

  return {
    productos,
    // filterProducts,
    getProducts,
    // filterByPrice,
    // filterByDescuento,
  };
};
