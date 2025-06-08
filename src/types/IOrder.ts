import { IDetailsProduct, ITalle } from "./IDetailsProduct";
import { IUser } from "./IUser";

export interface IOrder {
  idUsuario: number;
  productos: IOrderItem[];
  total: number;
}

export interface IOrderItem {
  id: number;
  cantidad: number;
  idTalle: number;
}

export interface IDetailsOrder {
  id: number;
  cantidad: number;
  detalleProducto: IDetailsProduct;
  talle: ITalle;
}

export interface IOrderPay {
  id: number;
  usuario: IUser;
  detalleOrdenCompras: IDetailsOrder[];
  fechaCompra: string;
  total: number;
}

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

export interface IState {
  preferenceId: string | null;
  open: boolean;
}
