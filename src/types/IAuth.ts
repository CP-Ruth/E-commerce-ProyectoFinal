export interface ILogin {
  username: string;
  password: string;
}

export interface IRegister {
  nombre: string;
  apellido: string;
  dni: number;
  email: string;
  password: string;
  direccion: string;
  localidad: string;
  provincia: string;
  rol: string;
}

export interface IToken {
  token: string;
}
