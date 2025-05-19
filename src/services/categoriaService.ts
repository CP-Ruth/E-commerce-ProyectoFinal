import axios from "axios";

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
