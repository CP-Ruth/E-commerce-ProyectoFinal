export interface IOrder {
  id: number;
  idUsuario?: number;
  total: number;
  fechaCompra: Date;
};

export interface IOrderItem {
  id: number;
  cantidad: number;
  idDetalleProducto: number;
  idOrder: number
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
