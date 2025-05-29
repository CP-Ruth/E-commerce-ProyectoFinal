import axios from "axios";

const URL = "http://localhost:8080/api/v1";

export const getTalles = async (path: string) => {
  try {
    let endpoint = "";
    if (path.length > 0) endpoint = path === "CALZADO" ? "numerico" : "alfabetico";

    const response = await axios.get(
      `${URL}/${endpoint.length > 0 ? `talles/${endpoint}` : "talles"}`
    );
    return response.data;
  } catch (error: any) {
    if (error.response) {
      throw new Error(`Error al obtener los usuarios: ${error.response.data}`);
    }
    throw error;
  }
};
