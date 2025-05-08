import { FC, ReactNode } from "react";
import styles from "./TableRow.module.css";
import { IOrder, IProduct, IUser } from "../../../types/types";

interface PropsTableUser {
  user: IUser;
  children?: ReactNode;
}

interface PropsTableProduct {
  product: IProduct;
  children?: ReactNode;
}

interface PropsTableOrder {
  order: IOrder;
  children?: ReactNode;
}

export const TableRowUser: FC<PropsTableUser> = ({ user, children }) => {
  return (
    <tr className={styles.tableRow}>
      <td>
        {user.nombre},{user.apellido}
      </td>
      <td>{user.email}</td>
      <td>{user.direccion}</td>
      <td>{user.provincia}</td>
      <td>{children}</td>
    </tr>
  );
};

export const TableRowProduct: FC<PropsTableProduct> = ({
  product,
  children,
}) => {
  return (
    <tr className={styles.tableRow}>
      <td>{product.nombre}</td>
      <td>{product.color}</td>
      <td>{product.talle}</td>
      <td>{product.sexo}</td>
      <td>{product.cantidad}</td>
      <td>{product.precioVenta}</td>
      <td>{product.estado}</td>
      <td>{children}</td>
    </tr>
  );
};

export const TableRowOrder: FC<PropsTableOrder> = ({ order, children }) => {
  return (
    <tr className={styles.tableRow}>
      <td>{order.id}</td>
      <td>{order.fechaHora}</td>
      <td>{order.pagado}</td>
      <td>{order.estado}</td>
      <td>{children}</td>
    </tr>
  );
};
