import { IProduct } from "./IProduct";

export type Sex = 'HOMBRE' | 'MUJER';

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

export interface IDetailsProduct {
  id: number;
  color: string;
  activo: boolean;
  producto: IProduct;
  descuento: IDiscount;
  imagenes: IImage[];
}