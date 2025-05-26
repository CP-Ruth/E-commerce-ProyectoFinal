import { create } from "zustand";
import { IUser } from "../types/IUser";

interface IUserActive {
  userActive: IUser | null;
  token: string;
  setUserActive: (user: IUser) => void;
  setToken: (token: string) => void;
}

export const useStoreUserActive = create<IUserActive>((set) => ({
  userActive: null,
  token: "",
  setUserActive: (user) => set({ userActive: user }),
  setToken: (token) => set({ token }),
}));
