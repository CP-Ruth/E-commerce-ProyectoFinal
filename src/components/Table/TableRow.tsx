import { FC } from "react";
import styles from "./Table.module.css";
import { IUser } from "../../types/IUser";
import { IDetailsProduct } from "../../types/IDetailsProduct";

interface PropUser {
  usuario: IUser;
}

interface PropsProduct {
  detalle: IDetailsProduct;
}

export const TableRowUser: FC<PropUser> = ({ usuario }) => {
  return (
    <tr className={styles.tableRow}>
      <td>
        {usuario.nombre} {usuario.apellido}
      </td>
      <td>{usuario.username}</td>
      <td>{usuario.dni}</td>
      <td>{usuario.direccion.domicilio}</td>
      <td>{usuario.direccion.localidad.nombre}</td>
      <td>{usuario.direccion.localidad.provincia.nombre}</td>
      <td>{/** opciones  */}</td>
    </tr>
  );
};

export const TableRowProduct: FC<PropsProduct> = ({detalle}) => {
  return (
    <tr className={styles.tableRow}>
      <td>{detalle.producto.nombre}</td>
      <td>{detalle.color}</td>
      <td>{detalle.producto.sexo}</td>
      <td>""</td>
      <td>${detalle.producto.precio_venta}</td>
      <td>{detalle.activo ? "Activo" : "Inactivo"}</td>
      <td>{/** opciones  */}</td>
    </tr>
  );
};

interface Pedido {
  id: string;
  fechaHora: string;
  formaPago: string;
  pagado: string;
  estado: string;
}

export const TableRowOrder: FC<Pedido> = ({
  id,
  fechaHora,
  formaPago,
  pagado,
  estado,
}) => {
  return (
    <tr className={styles.tableRow}>
      <td>{id}</td>
      <td>{fechaHora}</td>
      <td>{formaPago}</td>
      <td>{pagado}</td>
      <td>{estado}</td>
      <td>{/** opciones  */}</td>
    </tr>
  );
};
