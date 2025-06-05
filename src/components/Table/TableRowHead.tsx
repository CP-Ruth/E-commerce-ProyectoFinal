import styles from "./Table.module.css";

export const TableHeadUser = () => {
  return (
    <tr className={styles.tableRow}>
      <th>Rol</th>
      <th>Nombre</th>
      <th>Email</th>
      <th>Localidad</th>
      <th>Provincia</th>
      <th>Estado</th>
      <th className={styles.options}>Opciones</th>
    </tr>
  );
};

export const TableHeadDetail = () => {
  return (
    <tr className={styles.tableRow}>
      <th>Nombre</th>
      <th>Cantidad</th>
      <th>Precio venta</th>
      <th>Estado</th>
      <th className={styles.options}>Opciones</th>
    </tr>
  );
};
 
export const TableHeadProduct = () => {
  return (
    <tr className={styles.tableRow}>
      <th>Nombre</th>
      <th>Sexo</th>
      <th>Tipo Producto</th>
      <th>Categorias</th>
      <th className={styles.options}>Opciones</th>
    </tr>
  );
};

export const TableHeadOrder = () => {
  return (
    <tr className={styles.tableRow}>
      <th>Nro Pedido</th>
      <th>Fecha y hora</th>
      <th>Forma de pago</th>
      <th>Pagado</th>
      <th>Estado</th>
      <th className={styles.options}></th>
    </tr>
  );
};

export const TableHeadCategory = () => {
  return (
    <tr className={styles.tableRow}>
      <th>Id</th>
      <th>Nombre</th>
      <th className={styles.options}>Opciones</th>
    </tr>
  );
};

export const TableHeadDiscount = () => {
  return (
    <tr className={styles.tableRow}>
      <th>Nombre</th>
      <th>Porcentaje</th>
      <th>Fecha inicio</th>
      <th>Fecha fin</th>
      <th>Activo</th>
      <th className={styles.options}>Opciones</th>
    </tr>
  );
};
