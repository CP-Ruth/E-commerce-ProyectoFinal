import { create } from "zustand";
import { IUser } from "../types/IUser";

interface StoreUser {
  users: IUser[];
  setAllUsers: (users: IUser[]) => void;
  addUserList: (user: IUser) => void;
  updateUserList: (user: IUser) => void;
  deleteUserList: (id: number) => void;
}

export const useStoreUsers = create<StoreUser>((set) => ({
  users: [],
  setAllUsers: (users: IUser[]) => set({ users }),
  addUserList: (user: IUser) => set((state) => ({ users: [...state.users, user] })),
  updateUserList: (user: IUser) =>
    set((state) => ({
      users: state.users.map((u) => (u.id === user.id ? user : u)),
    })),
  deleteUserList: (id: number) =>
    set((state) => ({ users: state.users.filter((u) => u.id !== id) })),
}));
