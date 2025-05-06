export interface IProduct {
  id: string;
  nombre: string;
  sexo: string;
  tipoProducto: "Calzado" | "Ropa";
  precio: number;
  categoria: []
}
