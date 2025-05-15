import axios from "axios";
import { IDetailsProduct } from "../types/IDetailsProduct";

const URL = "http://localhost:8080/api/v1";

export const getProducts = async () => {
  try {
    const response = await axios.get<IDetailsProduct[]>(`${URL}/detalles_productos`);
    
  } catch (error: any) {
    if (error.response) {
      throw new Error(`Error al obtener los productos: ${error.response.data}`);
    }
    throw error;
  }
};

export const getProductsBySexoAndType = async (url: string) => {
  try {
    const response = await axios.get<IDetailsProduct[]>(`${URL}/detalles_productos/catalogo?` + url);
    return response.data;
  } catch (error: any) {
    if (error.response) {
      throw new Error(`Error al obtener los productos: ${error.response.data}`);
    }
    throw error;
  }

}

export const createProduct = async (product: IDetailsProduct) => {
  try {
    const response = await axios.post<IDetailsProduct>(`${URL}/detalles_productos`, product);
    return response.data;
  } catch (error: any) {
    if (error.response) {
      throw new Error(`Error al crear el producto: ${error.response.data}`);
    }
    throw error;
  }
};

export const updateProduct = async (product: IDetailsProduct) => {
  try {
    const response = await axios.put<IDetailsProduct>(
      `${URL}/detalles_productos/${product.id}`,
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
    const response = await axios.delete(`${URL}/detalles_productos/${id}`);
    return response.data;
  } catch (error: any) {
    if (error.response) {
      throw new Error(`Error al eliminar el producto: ${error.response.data}`);
    }
    throw error;
  }
};
