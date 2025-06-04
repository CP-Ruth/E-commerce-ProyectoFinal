import axios from "axios";
import { IDetailsProduct, IRequestColors } from "../types/IDetailsProduct";

const URL = "http://localhost:8080/api/v1";

export const getDetails = async () => {
  try {
    const response = await axios.get<IDetailsProduct[]>(
      `${URL}/detalles_productos`
    );
    return response.data;
  } catch (error: any) {
    if (error.response) {
      throw new Error(`Error al obtener los productos: ${error.response.data}`);
    }
    throw error;
  }
};

export const getDetailById = async (idProducto: number) => {
  try {
    const response = await axios.get<IDetailsProduct>(
      `${URL}/detalles_productos/${idProducto}`
    );
    return response.data;
  } catch (error: any) {
    if (error.response) {
      throw new Error(`Error al obtener el producto: ${error.response.data}`);
    }
    throw error;
  }
};

export const getDetailsByFilters = async (url: string) => {
  try {
    const response = await axios.get<IDetailsProduct[]>(
      `${URL}/detalles_productos/catalogo?` + url
    );
    return response.data;
  } catch (error: any) {
    if (error.response) {
      throw new Error(`Error al obtener los productos: ${error.response.data}`);
    }
    throw error;
  }
};

export const getDetailsByProduct = async (idProducto: number) => {
  try {
    const response = await axios.get<IRequestColors[]>(
      `${URL}/detalles_productos/colores/producto/${idProducto}`
    );
    return response.data;
  } catch (error: any) {
    if (error.response) {
      throw new Error(`Error al obtener los productos: ${error.response.data}`);
    }
    throw error;
  }
};

export const createDetail = async (product: IDetailsProduct) => {
  try {
    const response = await axios.post<IDetailsProduct>(
      `${URL}/detalles_productos`,
      product
    );
    return response.data;
  } catch (error: any) {
    if (error.response) {
      throw new Error(`Error al crear el producto: ${error.response.data}`);
    }
    throw error;
  }
};

export const updateDetail = async (product: IDetailsProduct, token: string) => {
  try {
    const response = await axios.put<IDetailsProduct>(
      `${URL}/detalles_productos/${product.id}`,
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

export const deleteDetail = async (id: number, token: string) => {
  try {
    const response = await axios.delete(`${URL}/detalles_productos/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.status === 200) return true;
  } catch (error: any) {
    if (error.response) {
      throw new Error(`Error al eliminar el producto: ${error.response.data}`);
    }
    throw error;
  }
};
