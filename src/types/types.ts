export interface IUser {
  nombre: string;
  apellido: string;
  email: string;
  dni?: string;
  direccion: string;
  provincia: string;
}

export interface IOrder {
  id: string;
  fechaHora: string;
  formaPago?: string;
  pagado: string;
  estado: string;
}

export interface IProduct {
  nombre: String;
  color: String;
  talle: String;
  sexo: String;
  cantidad: String;
  precioVenta: String;
  estado: String;
}
