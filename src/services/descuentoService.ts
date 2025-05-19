import axios from "axios";

const URL = "http://localhost:8080/api/v1";

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
