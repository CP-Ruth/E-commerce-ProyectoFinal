export interface Login {
  username: string;
  password: string;
}

export interface Register {
  nombre: string;
  apellido: string;
  dni: string;
  email: string;
  password: string;
  direccion: string;
  localidad: string;
  provincia: string;
}

export type ILoginForm = Login | Register;
