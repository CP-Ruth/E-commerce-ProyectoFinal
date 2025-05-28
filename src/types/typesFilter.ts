export interface DetalleProductoFiltroDTO {
  descuentos?: number[];
  precios?: string[]; // ej: ["10000-15000"]
  talles?: number[];
  categorias?: number[];
}

export interface ProductFilters {
  sexo?: 'HOMBRE' | 'MUJER';
  categoria?: 'ROPA' | 'CALZADO';
}