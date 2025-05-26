import axios from "axios";
import { IUser } from "../types/IUser";

const URL = "http://localhost:8080/api/v1";

export const getUsers = async (token: string) => {
  try {
    const response = await axios.get<IUser[]>(`${URL}/usuarios`, {
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

export const deleteUser = async (id: number, token: string) => {
  try {
    const response = await axios.delete(`${URL}/usuarios/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.status === 200) return true;
  } catch (error: any) {
    if (error.response) {
      throw new Error(`Error al eliminar el usuario: ${error.response.data}`);
    }
    throw error;
  }
};
