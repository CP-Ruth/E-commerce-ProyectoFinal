export interface IProduct {
  nombre: string;
  precio: number;
}

export type Sexo = 'HOMBRE' | 'MUJER';
export type TipoProducto = 'CALZADO' | 'ROPA'; 

export interface Categoria {
  id: number;
  nombre: string;
}

export interface Descuento {
  id: number;
  nombre: string;
  porcentaje: number;
  activo: boolean;
}

export interface Imagen {
  id: number;
  url: string;
}

export interface Producto {
  id: number;
  nombre: string;
  sexo: Sexo;
  precio_compra: number;
  precio_venta: number;
  tipoProducto: TipoProducto;
  categorias: Categoria[];
}

export interface DetalleProducto {
  id: number;
  color: string;
  activo: boolean;
  producto: Producto;
  descuento: Descuento;
  imagenes: Imagen[];
}