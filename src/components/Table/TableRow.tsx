import { FC } from "react"
import styles from "./Table.module.css"

interface Usuario {
    nombre: String,
    apellido: String,
    email: String,
    dni: String,
    direccion: String,
    provincia: String,
}

interface Producto {
    nombre: String,
    color:String,
    talle:String,
    sexo:String,
    cantidad:String,
    precioVenta:String,
    estado:String,
}

export const TableRowUser: FC<Usuario> = ({ nombre, apellido, email, dni, direccion, provincia }) => {
    return (
        <tr className={styles.tableRow}>
            <td>{nombre},{apellido}</td>
            <td>{email}</td>
            <td>{dni}</td>
            <td>{direccion}</td>
            <td>{provincia}</td>
            <td>{/** opciones  */}</td>
        </tr>
    )
}

export const TableRowProduct: FC<Producto> = ({nombre, color, talle, sexo, cantidad,precioVenta, estado}) => {
    return (
        <tr className={styles.tableRow}>
            <td>{nombre}</td>
            <td>{color}</td>
            <td>{talle}</td>
            <td>{sexo}</td>
            <td>{cantidad}</td>
            <td>{precioVenta}</td>
            <td>{estado}</td>
            <td>{/** opciones  */}</td>
        </tr>
    )
}

interface Pedido {
    id: string,
    fechaHora:string,
    formaPago:string,
    pagado:string,
    estado:string,
}

export const TableRowOrder: FC<Pedido> = ({id, fechaHora, formaPago,pagado, estado}) => {
    return (
        <tr className={styles.tableRow}>
            <td>{id}</td>
            <td>{fechaHora}</td>
            <td>{formaPago}</td>
            <td>{pagado}</td>
            <td>{estado}</td>
            <td>{/** opciones  */}</td>
        </tr>
    )
}
