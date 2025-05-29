import { create } from "zustand";
import { IDetailsProduct } from "../types/IDetailsProduct";

interface StoreDetails {
  details: IDetailsProduct[];
  setAllDetails: (products: IDetailsProduct[]) => void;
  addDetailsList: (product: IDetailsProduct) => void;
  updateDetailsList: (product: IDetailsProduct) => void;
  deleteDetailsList: (id: number) => void;
}

export const useStoreDetails = create<StoreDetails>((set) => ({
  details: [],
  setAllDetails: (details: IDetailsProduct[]) => set({ details }),
  addDetailsList: (detail: IDetailsProduct) =>
    set((state) => ({ details: [...state.details, detail] })),
  updateDetailsList: (detail: IDetailsProduct) =>
    set((state) => ({
      details: state.details.map((p) => (p.id === detail.id ? detail : p)),
    })),
  deleteDetailsList: (id: number) =>
    set((state) => ({
      details: state.details.map((u) =>
        u.id === id ? { ...u, activo: !u.activo } : u
      ),
    })),
}));
