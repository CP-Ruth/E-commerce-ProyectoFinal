import axios from "axios";

const URL = "http://localhost:8080/api/v1";

export const getTalles = async () => {
  try {
    const response = await axios.get(`${URL}/talles`);
    return response.data;
  } catch (error: any) {
    if (error.response) {
      throw new Error(`Error al obtener los usuarios: ${error.response.data}`);
    }
    throw error;
  }
};
