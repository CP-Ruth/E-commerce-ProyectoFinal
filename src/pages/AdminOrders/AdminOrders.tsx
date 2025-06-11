import { useEffect } from "react";
import { TableRowOrder } from "../../components/Table/TableRow";
import { TableHeadOrder } from "../../components/Table/TableRowHead";
import styles from "./Admin.Orders.module.css";
import { useOrders } from "../../hooks/useOrders";
import { MdEdit } from "react-icons/md";
import { FaRegEye } from "react-icons/fa";
import useModal from "../../hooks/useModal";
import OrderInfo from "./OrderInfo/OrderInfo";
import { IOrderPay } from "../../types/IOrder";

const AdminOrders = () => {
  const { orders, getAllOrders } = useOrders();
  const { openModal, handlerOpenModal, active } = useModal();

  useEffect(() => {
    getAllOrders();
  }, []);

  return (
    <section>
      <table className={styles.tableUser}>
        <thead>
          <TableHeadOrder />
        </thead>
        <tbody>
          {orders?.length > 0
            ? orders.map((pedido) => (
                <TableRowOrder pedido={pedido}>
                  <FaRegEye
                    size={30}
                    className={styles.icon}
                    onClick={() => handlerOpenModal(pedido, "info")}
                  />
                  <MdEdit size={30} className={styles.icon} />
                </TableRowOrder>
              ))
            : <td colSpan={6} style={{ textAlign: "center", paddingTop: "20px" }}>No hay pedidos</td>}
        </tbody>
      </table>
      {openModal.info && (
        <OrderInfo
          pedido={active as IOrderPay}
          onClose={() => handlerOpenModal(null, "info")}
        />
      )}
    </section>
  );
};

export default AdminOrders;
