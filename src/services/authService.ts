import { ILogin, IRegister, IToken } from "../types/IAuth";
import axios, { AxiosResponse } from "axios";
import { IUser } from "../types/IUser";
import Swal from "sweetalert2";

const url = "http://localhost:8080/api/v1/auth";
const urlUser = "http://localhost:8080/api/v1";

export const login = async (user: ILogin) => {
  try {
    const token: AxiosResponse<IToken> = await axios.post(`${url}/login`, user);
    return token.data;
  } catch (error) {
    Swal.fire("El usuario o contraseña son incorrectos", "", "error");
  }
};

export const register = async (user: IRegister) => {
  try {
    const token: AxiosResponse<IToken> = await axios.post(
      `${url}/register`,
      user
    );
    return token.data;
  } catch (error) {
    Swal.fire("No se ha podido registrar", "", "error");
  }
};

export const getUserByEmail = async (email: string, token: string) => {
  try {
    const response = await axios.get<IUser>(
      `${urlUser}/usuarios/username/${email}`,
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
        `Error al obtener informacion del usuario: ${error.response.data}`
      );
    }
    throw error;
  }
};

export const getUserByToken = async(token: string) => {
  try {
    const response = await axios.get<IUser>(`${url}/profile`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error: any) {
    if (error.response) {
      throw new Error(
        `Error al obtener informacion del usuario: ${error.response.data}`
      );
    }
    throw error;
  }
}
