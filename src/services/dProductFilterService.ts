import axios from "axios";
import { IDetailsProduct } from "../types/IDetailsProduct";
import { DetalleProductoFiltroDTO } from "../types/typesFilter";

const URL = "http://localhost:8080/api/v1";

//Obtenemos todos los detalles
export const getDetallesProductos = async (): Promise<IDetailsProduct[]> => {
  const response = await axios.get(`${URL}/detalles_productos`);
  return response.data;
};
//Obtenemos los detalles por producto
export const getDetalleProductoPorIdProducto = async (idProducto: number) => {
  const response = await axios.get(
    `${URL}/detalles_productos/producto/${idProducto}`
  );
  return response.data;
};

export const filtrarProductos = async (filtros: DetalleProductoFiltroDTO) => {
  const response = await axios.post(`${URL}/detalles_productos/filtrar`,
    filtros
  );
  return response.data;
};