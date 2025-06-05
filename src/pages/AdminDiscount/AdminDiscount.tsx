import { useEffect } from "react";
import { TableHeadDiscount } from "../../components/Table/TableRowHead";
import { useListDiscount } from "../../hooks/useListDiscount";
import styles from "./AdminDiscount.module.css";
import { TableRowDiscount } from "../../components/Table/TableRow";
import { MdEdit } from "react-icons/md";
import useModal from "../../hooks/useModal";
import DiscountForm from "./DiscountForm/DiscountForm";
import { IDiscount } from "../../types/IDetailsProduct";

const AdminDiscount = () => {
  const { descuentos, getAllDiscounts } = useListDiscount();
  const { openModal, handlerOpenModal, active } = useModal();

  useEffect(() => {
    getAllDiscounts();
  }, []);

  return (
    <>
      <section>
        <button
          className={styles.button}
          onClick={() => handlerOpenModal(null, "edit")}
        >
          Añadir Descuento
        </button>
        <table className={styles.tableUser}>
          <thead>
            <TableHeadDiscount />
          </thead>
          <tbody>
            {descuentos?.map((descuento) => (
              <TableRowDiscount key={descuento.id} descuento={descuento}>
                <MdEdit
                  size={30}
                  className={styles.icon}
                  onClick={() => handlerOpenModal(descuento, "edit")}
                />
              </TableRowDiscount>
            ))}
          </tbody>
        </table>
        {openModal.edit && (
          <DiscountForm
            discount={active as IDiscount}
            onClose={() => handlerOpenModal(null, "edit")}
          />
        )}
      </section>
    </>
  );
};

export default AdminDiscount;
