import { TableRowOrder } from "../AdminHome/TableRow/TableRow";
import TableHead from "../AdminHome/TableHead/TableHead";
import styles from "./AdminOrders.module.css";
import { pedidos } from "../../utils/pedidos";

const AdminOrders = () => {
  const columns = ["Nro Pedido", "Fecha", "Pagado", "Estado"];

  return (
    <section>
      <div></div>
      <table className={styles.tableUser}>
        <thead>
          <TableHead columns={columns} />
        </thead>
        <tbody>
          {pedidos.length > 0
            ? pedidos.map((pedido) => <TableRowOrder order={pedido} />)
            : "No hay usuarios"}
        </tbody>
      </table>
    </section>
  );
};

export default AdminOrders;
