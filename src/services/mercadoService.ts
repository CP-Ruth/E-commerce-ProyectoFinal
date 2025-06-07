import axios from "axios";
import { IOrder } from "../types/IOrder";

const URL = import.meta.env.VITE_API_URL;

export const createPayment = async (order: IOrder) => {
  try {
    const response = await axios.post(`${URL}/payments/mp`, order, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return response.data;
  } catch (error: any) {
    if (error.response) {
      throw new Error(`Error al crear el pago: ${error.response.data}`);
    }
    throw error;
  }
};
