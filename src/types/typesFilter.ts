export interface ProductFilterDTO {
  descuento?: string;
  talle?: string;
  categoria?: string;
  minPrecio?: number;
  maxPrecio?: number;
}

export interface ProductFilters {
  sexo?: 'HOMBRE' | 'MUJER';
  categoria?: 'ROPA' | 'CALZADO';
}