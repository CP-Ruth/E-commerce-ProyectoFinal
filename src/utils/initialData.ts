import { IDetailsProduct, IProduct } from "../types/IDetailsProduct";

export const initialFormDetail: IDetailsProduct = {
  producto: {
    nombre: "",
    sexo: "",
    tipoProducto: "",
    categorias: [],
  },
  precioVenta: "",
  precioCompra: "",
  color: "",
  activo: true,
  imagenes: [
    {
      url: "",
      alt: "",
    },
    {
      url: "",
      alt: "",
    },
  ],
  stocks: [
    {
      stock: "",
      talle: {
        name: "",
      },
    },
    {
      stock: "",
      talle: {
        name: "",
      },
    },
  ],
};

export const initialFormProduct: IProduct = {
  nombre: "",
  sexo: "HOMBRE",
  tipoProducto: "CALZADO",
  categorias: [],
};