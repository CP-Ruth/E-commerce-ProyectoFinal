import { create } from "zustand";
import { IDiscount } from "../types/IDetailsProduct";

interface StoreDiscount {
  descuentos: IDiscount[];
  setAllDescuentos: (descuento: IDiscount[]) => void;
  addDescuento: (descuento: IDiscount) => void;
  updateDescuento: (descuento: IDiscount) => void;
  deleteDescuento: (id: number) => void;
}

export const useStoreDiscount = create<StoreDiscount>((set) => ({
  descuentos: [],
  setAllDescuentos: (descuentos) => set({ descuentos }),
  addDescuento: (descuento) =>
    set((state) => ({ descuentos: [...state.descuentos, descuento] })),
  updateDescuento: (descuento) =>
    set((state) => ({
      descuentos: state.descuentos.map((d) =>
        d.id === descuento.id ? descuento : d
      ),
    })),
  deleteDescuento: (id) =>
    set((state) => ({
      descuentos: state.descuentos.map((d) =>
        d.id === id ? { ...d, activo: !d.activo } : d
      ),
    })),
}));
