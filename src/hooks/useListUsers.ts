import { IUser } from "../types/IUser";
import { useShallow } from "zustand/shallow";
import { useStoreUsers } from "../store/useStoreUsers";
import {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
} from "../services/userService";

export const useListUsers = () => {
  const { users, setAllUsers, addUserList, updateUserList, deleteUserList } =
    useStoreUsers(
      useShallow((state) => ({
        ...state,
      }))
    );

  const getAllUsers = async () => {
    const usuarios = await getUsers();

    if (usuarios) {
      setAllUsers(users);
    }
  };

  const createOneUser = async (usuario: IUser) => {
    const nuevoUsuario = await createUser(usuario);

    if (nuevoUsuario) {
      addUserList(nuevoUsuario);
    }
  };

  const updateOneUser = async (usuario: IUser) => {
    const usuarioActualizado = await updateUser(usuario);

    if (usuarioActualizado) {
      updateUserList(usuarioActualizado);
    }
  };

  const deleteOneUser = async (id: number) => {
    const usuarioEliminado = await deleteUser(id);

    if (usuarioEliminado) {
      deleteUserList(id);
    }
  };

  return {
    users,
    getAllUsers,
    createOneUser,
    updateOneUser,
    deleteOneUser,
  };
};
