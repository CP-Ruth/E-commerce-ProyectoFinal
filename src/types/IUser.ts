type Rol = "USUARIO" | "ADMIN"

export interface IUser {
   id: number
   nombre: string
   apellido: string
   dni: number
   username: string
   password: string
   rol: Rol
}
