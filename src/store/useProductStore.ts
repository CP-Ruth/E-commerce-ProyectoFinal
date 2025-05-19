// store/productStore.ts
import { create } from "zustand";

import { ProductFilters } from "../types/typesFilter";
import {
  getDetallesProductos,
  getDetalleProductoPorIdProducto,
} from "../services/productsService";
import { IDetailsProduct } from "../types/IDetailsProduct";

interface ProductState {
  detallesProductos: IDetailsProduct[];
  loading: boolean;
  error: string | null;
  filters: ProductFilters;
  setFilters: (filters: ProductFilters) => void;

  fetchDetallesProductos: () => Promise<void>;
  fetchDetalleProductoPorId: (
    idProducto: number
  ) => Promise<IDetailsProduct  | undefined>;
}

export const useProductStore = create<ProductState>((set) => ({
  detallesProductos: [],
  loading: false,
  error: null,
  filters: {},

  setFilters: (filters: ProductFilters) => set({ filters }),

  fetchDetallesProductos: async () => {
    set({ loading: true, error: null });
    try {
      const detalles = await getDetallesProductos();
      set({ detallesProductos: detalles, loading: false });
    } catch (error: any) {
      set({
        loading: false,
        error: error.message || "Error al cargar detalles de productos",
      });
    }
  },

  fetchDetalleProductoPorId: async (idProducto: number) => {
    try {
      return await getDetalleProductoPorIdProducto(idProducto);
    } catch (error: any) {
      console.error("Error al obtener detalle del producto:", error.message);
      return undefined;
    }
  },
}));
