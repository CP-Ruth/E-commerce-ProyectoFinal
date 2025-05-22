export interface ILogin {
    username: string;
    password: string;
}

export interface IRegister {
    nombre: string;
    apellido: string;
    dni: string;
    email: string;
    password: string;
    direccion: string;
    localidad: string;
    provincia: string;
}

export interface IToken{
    token: string;
}