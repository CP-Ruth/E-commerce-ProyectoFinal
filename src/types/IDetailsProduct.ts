export type Sex = "HOMBRE" | "MUJER" | "";
export type TipoProducto = "CALZADO" | "ROPA" | "";

export interface ICategory {
  id?: number;
  nombre: string;
}

export interface IDiscount {
  id?: number;
  nombre: string;
  porcentaje: number;
  fechaInicio: string;
  fechaFin: string;
  activo: boolean;
}

export interface IImage {
  id?: number;
  url: string | File;
  alt: string;
}

export interface ITalle {
  id?: number;
  name: string;
}

export interface IStock {
  id?: number;
  stock: number;
  talle: ITalle;
}

export interface IProduct {
  id?: number;
  nombre: string;
  sexo: Sex;
  categorias: ICategory[];
  tipoProducto: TipoProducto;
  activo?: boolean;
}

export interface IDetailsProduct {
  id?: number;
  color: string;
  activo?: boolean;
  producto: IProduct;
  precioVenta: number;
  precioCompra: number;
  descuento?: IDiscount;
  imagenes: IImage[];
  stocks: IStock[];
}

export interface IRequestColors {
  idDetalle: number;
  color: string;
}
