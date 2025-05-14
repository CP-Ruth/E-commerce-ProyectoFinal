import axios from "axios";
import { DetalleProducto, Producto } from "../types/typesProduct";

const URL = "http://localhost:8080/api/v1";

//Obtener toddos los productos
export const getProductos = async (): Promise<Producto[]> => {
  const response = await axios.get(`${URL}/productos`);
  return response.data;
};

//Obtenemos todos los detalles
export const getDetallesProductos = async (): Promise<DetalleProducto[]> => {
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
