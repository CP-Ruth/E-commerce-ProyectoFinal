import axios from "axios";
import { IProduct } from "../types/IProduct";
import { IDetailsProduct } from "../types/IDetailsProduct";

const URL = "http://localhost:8080/api/v1";

//Obtener toddos los productos
export const getProductos = async (): Promise<IProduct[]> => {
  const response = await axios.get(`${URL}/productos`);
  return response.data;
};

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
