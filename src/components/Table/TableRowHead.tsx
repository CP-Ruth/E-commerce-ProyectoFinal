import styles from "./Table.module.css";

export const TableHeadUser = () => {
  return (
    <tr className={styles.tableRow}>
      <th>Nombre</th>
      <th>Email</th>
      <th>Direccion</th>
      <th>Localidad</th>
      <th>Provincia</th>
      <th className={styles.options}></th>
    </tr>
  );
};

export const TableHeadProduct = () => {
  return (
    <tr className={styles.tableRow}>
      <th>Nombre</th>
      <th>Color</th>
      <th>Sexo</th>
      <th>Cantidad</th>
      <th>Precio venta</th>
      <th>Estado</th>
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
