import axios from "axios";

const URL = import.meta.env.VITE_API_URL;

export const getOrders = async (token: string) => {
  try {
    const response = await axios.get(`${URL}/ordenes_compras`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error: any) {
    if (error.response) {
      throw new Error(`Error al obtener los usuarios: ${error.response.data}`);
    }
    throw error;
  }
};
