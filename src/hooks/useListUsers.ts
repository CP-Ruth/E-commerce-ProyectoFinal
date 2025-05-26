import { useShallow } from "zustand/shallow";
import { useStoreUsers } from "../store/useStoreUsers";
import {
  getUsers,
  deleteUser,
} from "../services/userService";
import { useStoreUserActive } from "../store/useStoreUserActive";

export const useListUsers = () => {
  const { users, setAllUsers, deleteUserList } =
    useStoreUsers(
      useShallow((state) => ({
        ...state,
      }))
    );
    const token = useStoreUserActive((state) => state.token);

  const getAllUsers = async () => {
    const usuarios = await getUsers(token);

    if (usuarios) {
      setAllUsers(usuarios);
    }
  };

  const deleteOneUser = async (id: number) => {
    const usuarioEliminado = await deleteUser(id, token);

    if (usuarioEliminado) {
      deleteUserList(id);
    }
  };

  return {
    users,
    getAllUsers,
    deleteOneUser,
  };
};
