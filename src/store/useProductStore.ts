// store/productStore.ts
import { create } from 'zustand';
import { DetalleProducto } from '../types/IProduct';
import {
  getDetallesProductos,
  getDetalleProductoPorIdProducto,
} from '../services/productsService';

interface ProductState {
  detallesProductos: DetalleProducto[];
  loading: boolean;
  error: string | null;

  fetchDetallesProductos: () => Promise<void>;
  fetchDetalleProductoPorId: (idProducto: number) => Promise<DetalleProducto | undefined>;
}

export const useProductStore = create<ProductState>((set) => ({
  detallesProductos: [],
  loading: false,
  error: null,

  fetchDetallesProductos: async () => {
    set({ loading: true, error: null });
    try {
      const detalles = await getDetallesProductos();
      set({ detallesProductos: detalles, loading: false });
    } catch (error: any) {
      set({ loading: false, error: error.message || 'Error al cargar detalles de productos' });
    }
  },

  fetchDetalleProductoPorId: async (idProducto: number) => {
    try {
      return await getDetalleProductoPorIdProducto(idProducto);
    } catch (error: any) {
      console.error('Error al obtener detalle del producto:', error.message);
      return undefined;
    }
  },
}));
