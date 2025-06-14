import { useShallow } from "zustand/shallow";
import { useStoreUsers } from "../store/useStoreUsers";
import { getUsers, deleteUser } from "../services/userService";

export const useListUsers = () => {
  const { users, setAllUsers, deleteUserList } = useStoreUsers(
    useShallow((state) => ({
      ...state,
    }))
  );

  const getAllUsers = async () => {
    const token = localStorage.getItem("token");
    const usuarios = await getUsers(token!);

    if (usuarios) {
      setAllUsers(usuarios);
    }
  };

  const deleteOneUser = async (id: number) => {
    const token = localStorage.getItem("token");
    const usuarioEliminado = await deleteUser(id, token!);

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
