import { Locality } from "./ILocality"

type Rol = "USUARIO" | "ADMIN" | ""

export interface Address {
   id?: number
   domicilio: string
   localidad: Locality
}

export interface IUser {
   id?: number
   nombre: string
   apellido: string
   dni: number
   username: string
   password: string
   rol: Rol
   direccion: Address
   activo: boolean
}
