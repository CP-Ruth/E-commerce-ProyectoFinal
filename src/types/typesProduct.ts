export type Sexo = 'HOMBRE' | 'MUJER';
export type TipoProducto = 'CALZADO' | 'ROPA'; 

export interface ICategoria {
  id: number;
  nombre: string;
}

export interface IDescuento {
  id: number;
  nombre: string;
  porcentaje: number;
  activo: boolean;
}

export interface IImagen {
  id: number;
  url: string;
}

export interface IProducto {
  id: number;
  nombre: string;
  sexo: Sexo;
  precio_compra: number;
  precio_venta: number;
  tipoProducto: TipoProducto;
  categorias: ICategoria[];
}

export interface IDetalleProducto {
  id: number;
  color: string;
  activo: boolean;
  producto: IProducto;
  descuento: IDescuento;
  imagenes: IImagen[];
}