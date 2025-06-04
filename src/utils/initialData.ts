import { IDetailsProduct, IProduct } from "../types/IDetailsProduct";

export const initialFormDetail: IDetailsProduct = {
    producto: {
        nombre: "",
        sexo: "",
        tipoProducto: "",
        categorias: [],
    },
    precioVenta: 0,
    precioCompra: 0,
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
            stock: 0,
            talle: {
                name: "",
            },
        },
        {
            stock: 0,
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