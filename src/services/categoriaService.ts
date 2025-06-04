import axios from "axios";
import { ICategory } from "../types/IDetailsProduct";

const URL = "http://localhost:8080/api/v1";

export const getCategorias = async () => {
  try {
    const response = await axios.get(`${URL}/categorias`);
    return response.data;
  } catch (error: any) {
    if (error.response) {
      throw new Error(
        `Error al obtener las categorias: ${error.response.data}`
      );
    }
    throw error;
  }
};

export const createCategory = async (category: ICategory, token: string) => {
  try {
    const response = await axios.post(`${URL}/categorias`, category, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error: any) {
    if (error.response) {
      throw new Error(`Error al crear la categoria: ${error.response.data}`);
    }
    throw error;
  }
};

export const modifyCategory = async (category: ICategory, token: string) => {
  try {
    const response = await axios.put(
      `${URL}/categorias/${category.id}`,
      category,
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
        `Error al actualizar la categoria: ${error.response.data}`
      );
    }
    throw error;
  }
};
