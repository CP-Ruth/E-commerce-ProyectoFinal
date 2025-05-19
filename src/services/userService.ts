import axios from "axios";
import { IUser } from "../types/IUser";

const URL = "http://localhost:8080/api/v1";

export const getUsers = async () => {
  try {
    const response = await axios.get<IUser[]>(`${URL}/usuarios`);
    return response.data;
  } catch (error: any) {
    if (error.response) {
      throw new Error(`Error al obtener los usuarios: ${error.response.data}`);
    }
    throw error;
  }
};

export const createUser = async (user: IUser) => {
  try {
    const response = await axios.post<IUser>(`${URL}/usuarios`, user);
    return response.data;
  } catch (error: any) {
    if (error.response) {
      throw new Error(`Error al crear el usuario: ${error.response.data}`);
    }
    throw error;
  }
};

export const updateUser = async (user: IUser) => {
  try {
    const response = await axios.put<IUser>(`${URL}/usuarios/${user.id}`, user);
    return response.data;
  } catch (error: any) {
    if (error.response) {
      throw new Error(`Error al actualizar el usuario: ${error.response.data}`);
    }
    throw error;
  }
};

export const deleteUser = async (id: number) => {
  try {
    const response = await axios.delete(`${URL}/usuarios/${id}`);
    return response.data;
  } catch (error: any) {
    if (error.response) {
      throw new Error(`Error al eliminar el usuario: ${error.response.data}`);
    }
    throw error;
  }
};
