import axios from "axios";
import { IProduct } from "../types/IProduct";

const URL = "http://localhost:8080/api/v1";

export const getProducts = async () => {
  try {
    const response = await axios.get<IProduct[]>(`${URL}/productos`);
    return response.data;
  } catch (error: any) {
    if (error.response) {
      throw new Error(`Error al obtener los productos: ${error.response.data}`);
    }
    throw error;
  }
};

export const createProduct = async (product: IProduct) => {
  try {
    const response = await axios.post<IProduct>(`${URL}/productos`, product);
    return response.data;
  } catch (error: any) {
    if (error.response) {
      throw new Error(`Error al crear el producto: ${error.response.data}`);
    }
    throw error;
  }
};

export const updateProduct = async (product: IProduct) => {
  try {
    const response = await axios.put<IProduct>(
      `${URL}/productos/${product.id}`,
      product
    );
    return response.data;
  } catch (error: any) {
    if (error.response) {
      throw new Error(
        `Error al actualizar el producto: ${error.response.data}`
      );
    }
    throw error;
  }
};

export const deleteProduct = async (id: number) => {
  try {
    const response = await axios.delete(`${URL}/productos/${id}`);
    return response.data;
  } catch (error: any) {
    if (error.response) {
      throw new Error(`Error al eliminar el producto: ${error.response.data}`);
    }
    throw error;
  }
};
