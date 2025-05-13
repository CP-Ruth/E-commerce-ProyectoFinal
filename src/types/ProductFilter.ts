export interface ProductFilterDTO {
  descuento?: string;
  rangosPrecios?: RangoPrecio[];
  talle?: string;
  categoria?: string;
}

export interface RangoPrecio {
  minPrecio: number;
  maxPrecio: number;
}