import axios from "axios";
import { IProduct } from "../types/IDetailsProduct";

const URL = "http://localhost:8080/api/v1";

export const getProducts = async (token: string) => {
  try {
    const response = await axios.get<IProduct[]>(`${URL}/productos`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error: any) {
    if (error.response) {
      throw new Error(`Error al obtener los productos: ${error.response.data}`);
    }
    throw error;
  }
};

export const getProductById = async (idProducto: number, token: string) => {
  try {
    const response = await axios.get<IProduct>(
      `${URL}/productos/${idProducto}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error: any) {
    if (error.response) {
      throw new Error(`Error al obtener el producto: ${error.response.data}`);
    }
    throw error;
  }
};

export const createProduct = async (product: IProduct, token: string) => {
  try {
    const response = await axios.post<IProduct>(`${URL}/productos`, product, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error: any) {
    if (error.response) {
      throw new Error(`Error al crear el producto: ${error.response.data}`);
    }
    throw error;
  }
};

export const updateProduct = async (product: IProduct, token: string) => {
  try {
    const response = await axios.put<IProduct>(
      `${URL}/productos/${product.id}`,
      product,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
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

