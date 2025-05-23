export type Sex = "HOMBRE" | "MUJER";
export type TipoProducto = "CALZADO" | "ROPA";

export interface ICategory {
  id: number;
  nombre: string;
}

export interface IDiscount {
  id: number;
  nombre: string;
  porcentaje: number;
  activo: boolean;
}

export interface IImage {
  id: number;
  url: string;
}

export interface IStock {
  id: number;
  stock: number;
  talle: {
    id: number;
    name: string;
  };
}

export interface IProduct {
  id: number;
  nombre: string;
  sexo: Sex;
  categoria: ICategory[] | ICategory;
  precio_venta: number;
  precio_compra: number;
  tipoProducto: TipoProducto;
}

export interface IDetailsProduct {
  id: number;
  color: string;
  activo: boolean;
  producto: IProduct;
  descuento: IDiscount;
  imagenes: IImage[];
  stocks: IStock[];
}
