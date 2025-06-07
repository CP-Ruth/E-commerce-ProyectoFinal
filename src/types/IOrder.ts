export interface IOrder {
  idUsuario: number;
  productos: IOrderItem[];
  total: number;
};

export interface IOrderItem {
  id: number;
  cantidad: number;
  idTalle: number;
};

export interface IItem {
  idDetalleProducto: number;
  nombre: string;
  precioV: number;
  precioDesc?: number;
  color: string;
  talleId: number;
  talle: string;
  cantidad: number;
  imagen?: string;
}