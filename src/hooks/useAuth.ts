import { useShallow } from "zustand/shallow";
import { useStoreUserActive } from "../store/useStoreUserActive";
import { ILogin, IRegister } from "../types/IAuth";
import {
  getUserByEmail,
  getUserByToken,
  login,
  register,
} from "../services/authService";
import Swal from "sweetalert2";

export const useAuth = () => {
  const { userActive, setUserActive, token, setToken } = useStoreUserActive(
    useShallow((state) => ({
      ...state,
    }))
  );

  const loginUser = async (usuario: ILogin) => {
    const data = await login(usuario);

    if (data) {
      localStorage.setItem("token", data.token);
      const user = await getUserByEmail(usuario.username, data.token);

      if (user) {
        setUserActive(user);
        setToken(data.token);
        Swal.fire("Te has logeado correctamente", "", "success");
      }
    }
  };

  const registerUser = async (usuario: IRegister, save: boolean) => {
    const data = await register(usuario);

    if (data && save) {
      localStorage.setItem("token", data.token);
      const user = await getUserByEmail(usuario.email, data.token);

      if (user) {
        setUserActive(user);
        setToken(data.token);
        Swal.fire("Te has registrado correctamente", "", "success");
      }
    }else{
      return data
    }
  };

  const getUserByTokenUser = async () => {
    const token = localStorage.getItem("token");

    if (token && userActive === null) {
      const data = await getUserByToken(token);

      if (data) {
        setUserActive(data);
        setToken(token);
      }
    }
  };

  return {
    userActive,
    setUserActive,
    token,
    loginUser,
    registerUser,
    getUserByTokenUser,
  };
};
