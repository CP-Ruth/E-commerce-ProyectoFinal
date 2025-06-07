import axios from "axios";
import { IDetailsProduct } from "../types/IDetailsProduct";

const URL = import.meta.env.VITE_API_URL;

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
