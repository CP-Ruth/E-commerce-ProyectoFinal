import { FC, ReactNode } from "react";
import styles from "./Table.module.css";
import { IUser } from "../../types/IUser";
import { IDetailsProduct } from "../../types/IDetailsProduct";

interface PropUser {
  usuario: IUser;
  
}

interface PropsProduct {
  detalle: IDetailsProduct;
  children?: ReactNode;
}

export const TableRowUser: FC<PropUser> = ({ usuario }) => {
  return (
    <tr className={styles.tableRow}>
      <td>{usuario.rol}</td>
      <td>
        {usuario.nombre} {usuario.apellido}
      </td>
      <td>{usuario.username}</td>
      <td>{usuario.direccion.domicilio}</td>
      <td>{usuario.direccion.localidad.nombre}</td>
      <td>{usuario.direccion.localidad.provincia.nombre}</td>
      <td>{}</td>
    </tr>
  );
};

export const TableRowProduct: FC<PropsProduct> = ({ detalle, children }) => {
  return (
    <tr className={styles.tableRow}>
      <td>{detalle.producto.nombre}</td>
      <td>{detalle.color}</td>
      <td>{detalle.producto.sexo}</td>
      <td>{detalle.stocks.reduce((itemPrev, item) => itemPrev + item.stock, 0)}</td>
      <td>${detalle.producto.precio_venta}</td>
      <td>{detalle.activo ? "Activo" : "Inactivo"}</td>
      <td>{children}</td>
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
