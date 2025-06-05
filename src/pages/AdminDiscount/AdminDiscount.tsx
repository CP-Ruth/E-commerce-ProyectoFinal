import { useEffect } from "react";
import { TableHeadDiscount } from "../../components/Table/TableRowHead";
import { useListDiscount } from "../../hooks/useListDiscount";
import styles from "./AdminDiscount.module.css";
import { TableRowDiscount } from "../../components/Table/TableRow";
import { FaPowerOff } from "react-icons/fa";
import { MdEdit } from "react-icons/md";

const AdminDiscount = () => {
  const { descuentos, getAllDiscounts } = useListDiscount();

  useEffect(() => {
    getAllDiscounts();
  }, []);

  return (
    <>
      <section>
        <button className={styles.button}>Añadir Descuento</button>
        <table className={styles.tableUser}>
          <thead>
            <TableHeadDiscount />
          </thead>
          <tbody>
            {descuentos?.map((descuento) => (
              <TableRowDiscount key={descuento.id} descuento={descuento}>
                <MdEdit size={30} className={styles.icon} />
                <FaPowerOff
                  className={`${styles.icon} ${
                    descuento.activo ? styles.active : styles.deactive
                  }`}
                  size={30}
                />
              </TableRowDiscount>
            ))}
          </tbody>
        </table>
      </section>
    </>
  );
};

export default AdminDiscount;
