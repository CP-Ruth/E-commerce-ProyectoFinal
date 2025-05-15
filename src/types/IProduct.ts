export type TipoProducto = "CALZADO" | "ROPA";

export interface IProduct {
  id: number;
  nombre: string;
  precio_venta: number;
  precio_compra: number;
  tipoProducto: TipoProducto;
}