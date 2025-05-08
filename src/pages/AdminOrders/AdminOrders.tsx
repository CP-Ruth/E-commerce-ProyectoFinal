import { TableRowOrder } from "../../components/Table/TableRow"
import { TableHeadOrder } from "../../components/Table/TableRowHead"
import styles from "./Admin.Orders.module.css"

const AdminOrders = () => {
  interface Pedido {
    id: string;
    fechaHora: string;
    formaPago: string;
    pagado: string;
    estado: string;
  }

  const pedidos: Pedido[] = [
    {
      id: "001",
      fechaHora: "2025-05-08 10:15",
      formaPago: "Efectivo",
      pagado: "Sí",
      estado: "Entregado",
    },
    {
      id: "002",
      fechaHora: "2025-05-08 11:30",
      formaPago: "Tarjeta",
      pagado: "No",
      estado: "Pendiente",
    },
    {
      id: "003",
      fechaHora: "2025-05-07 18:45",
      formaPago: "Transferencia",
      pagado: "Sí",
      estado: "En camino",
    },
    {
      id: "004",
      fechaHora: "2025-05-07 14:20",
      formaPago: "MercadoPago",
      pagado: "Sí",
      estado: "Entregado",
    },
    {
      id: "005",
      fechaHora: "2025-05-06 09:05",
      formaPago: "Efectivo",
      pagado: "No",
      estado: "Cancelado",
    },
    {
      id: "006",
      fechaHora: "2025-05-05 16:40",
      formaPago: "Tarjeta",
      pagado: "Sí",
      estado: "Entregado",
    },
    {
      id: "007",
      fechaHora: "2025-05-05 17:25",
      formaPago: "Transferencia",
      pagado: "Sí",
      estado: "En camino",
    },
    {
      id: "008",
      fechaHora: "2025-05-04 13:55",
      formaPago: "MercadoPago",
      pagado: "No",
      estado: "Pendiente",
    },
    {
      id: "009",
      fechaHora: "2025-05-03 12:10",
      formaPago: "Efectivo",
      pagado: "Sí",
      estado: "Entregado",
    },
    {
      id: "010",
      fechaHora: "2025-05-02 19:30",
      formaPago: "Tarjeta",
      pagado: "No",
      estado: "Cancelado",
    }
  ];

  return (
    <section>
      <div></div>

      <table className={styles.tableUser} >
        <thead>
          <TableHeadOrder />
        </thead>
        <tbody>
          {pedidos.length > 0 ? (
            pedidos.map((pedido) => (
              <TableRowOrder
                id={pedido.id}
                fechaHora={pedido.fechaHora}
                formaPago={pedido.formaPago}
                pagado={pedido.pagado}
                estado={pedido.estado}
              />
            ))
          ) : ("No hay usuarios")}
        </tbody>
      </table>
    </section>
  )
}

export default AdminOrders