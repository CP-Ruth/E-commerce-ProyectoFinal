import axios from "axios";
import { IDiscount } from "../types/IDetailsProduct";

const URL = import.meta.env.VITE_API_URL;

export const getDescuentos = async () => {
  try {
    const response = await axios.get(`${URL}/descuentos`);
    return response.data;
  } catch (error: any) {
    if (error.response) {
      throw new Error(
        `Error al obtener los descuentos: ${error.response.data}`
      );
    }
    throw error;
  }
};

export const createDiscount = async (discount: IDiscount, token: string) => {
  try {
    const response = await axios.post(`${URL}/descuentos`, discount, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error: any) {
    if (error.response) {
      throw new Error(`Error al crear el descuento: ${error.response.data}`);
    }
    throw error;
  }
};

export const updateDiscount = async (discount: IDiscount, token: string) => {
  try {
    const response = await axios.put(
      `${URL}/descuentos/${discount.id}`,
      discount,
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
        `Error al actualizar el descuento: ${error.response.data}`
      );
    }
    throw error;
  }
};
