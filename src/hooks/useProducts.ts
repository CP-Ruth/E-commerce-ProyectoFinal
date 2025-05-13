// hooks/useProductos.ts

import { useProductStore } from "../store/useProductStore";


export const useProductos = () => {
  const {
    detallesProductos,
    loading,
    error,
    fetchDetallesProductos,
    fetchDetalleProductoPorId,
  } = useProductStore();

  return {
    detallesProductos,
    loading,
    error,
    fetchDetallesProductos,
    fetchDetalleProductoPorId,
  };
};
