import { FC, ReactNode } from "react";
import styles from "./Table.module.css";
import { IUser } from "../../types/IUser";
import { ICategory, IDetailsProduct, IDiscount, IProduct } from "../../types/IDetailsProduct";

interface PropUser {
  usuario: IUser;
  children?: ReactNode;
}

interface PropsProduct {
  producto: IProduct;
  children?: ReactNode;
}

interface PropsDetail {
  detalle: IDetailsProduct
  children?: ReactNode;
}

interface PropsCategory {
  categoria: ICategory
  children?: ReactNode;
}

interface PropsDiscount {
  descuento: IDiscount
  children?: ReactNode;
}

export const TableRowUser: FC<PropUser> = ({ usuario, children }) => {
  return (
    <tr className={styles.tableRow}>
      <td>{usuario.rol}</td>
      <td>
        {usuario.nombre} {usuario.apellido}
      </td>
      <td className={styles.username}>{usuario.username}</td>
      <td>{usuario.direccion.localidad.nombre}</td>
      <td>{usuario.direccion.localidad.provincia.nombre}</td>
      <td>{usuario.activo ? "Activo" : "Inactivo"}</td>
      <td>{children}</td>
    </tr>
  );
};

export const TableRowDetail: FC<PropsDetail> = ({ detalle, children }) => {
  return (
    <tr className={styles.tableRow}>
      <td>{detalle.producto.nombre}, {detalle.color}, para {detalle.producto.sexo}</td>
      <td>{detalle.stocks.reduce((itemPrev, item) => itemPrev + item.stock, 0)}</td>
      <td>${detalle.precioVenta}</td>
      <td>{detalle.activo ? "Activo" : "Inactivo"}</td>
      <td>{children}</td>
    </tr>
  );
};

export const TableRowProduct: FC<PropsProduct> = ({ producto, children }) => {
  return (
    <tr className={styles.tableRow}>
      <td>{producto.nombre}</td>
      <td>{producto.sexo}</td>
      <td>{producto.tipoProducto}</td>
      <td>{producto.categorias.map((categoria) => categoria.nombre).join(", ")}</td>
      <td>{children}</td>
    </tr>
  );
};

export const TableRowCategory: FC<PropsCategory> = ({ categoria, children }) => {
  return (
    <tr className={styles.tableRow}>
      <td>{categoria.id}</td>
      <td>{categoria.nombre}</td>
      <td>{children}</td>
    </tr>
  );
};

export const TableRowDiscount: FC<PropsDiscount> = ({ descuento, children }) => {
  return (
    <tr className={styles.tableRow}>
      <td>{descuento.nombre}</td>
      <td>{descuento.porcentaje}%</td>
      <td>{descuento.fechaInicio}</td>
      <td>{descuento.fechaFin}</td>
      <td>{descuento.activo ? "Activo" : "Inactivo"}</td>
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
