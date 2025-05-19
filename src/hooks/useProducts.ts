import { useProductStore } from "../store/useProductStore";

export const useProductos = () => {
  const {
    detallesProductos,
    loading,
    error,
    filters,
    setFilters,
    fetchDetallesProductos,
    fetchDetalleProductoPorId,
  } = useProductStore();

  const productosFiltrados = detallesProductos.filter((dp) => {
    const coincideSexo = filters.sexo ? dp.producto.sexo === filters.sexo : true;
    const coincideCategoria = filters.categoria
      ? dp.producto.tipoProducto === filters.categoria
      : true;
    return coincideSexo && coincideCategoria;
  });

  return {
    detallesProductos,
    loading,
    error,
    filters,
    setFilters,
    productosFiltrados,
    fetchDetallesProductos,
    fetchDetalleProductoPorId,
  };
};
