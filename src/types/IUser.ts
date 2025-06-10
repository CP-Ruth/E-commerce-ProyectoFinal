import { Locality } from "./ILocality";

type Rol = "USUARIO" | "ADMIN" | "";

export interface Address {
  id?: number;
  domicilio: string;
  localidad: Locality;
}

export interface IUser {
  id?: number;
  nombre: string;
  apellido: string;
  dni: number | string;
  username: string;
  password: string;
  rol: Rol;
  direccion: Address;
  activo: boolean;
}

export interface IUserUpdate {
  id?: number;
  nombre: string;
  apellido: string;
  domicilio: string;
  localidad: string;
  provincia: string;
  dni: string | number;
  username: string;
  password: string;
  rol: Rol;
  activo: boolean;
}
