import { useEffect } from "react";
import { TableHeadDiscount } from "../../components/Table/TableRowHead";
import { useListDiscount } from "../../hooks/useListDiscount";
import styles from "./AdminDiscount.module.css";
import { TableRowDiscount } from "../../components/Table/TableRow";
import { FaPowerOff } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import useModal from "../../hooks/useModal";
import DiscountForm from "./DiscountForm/DiscountForm";
import { IDiscount } from "../../types/IDetailsProduct";
import Swal from "sweetalert2";

const AdminDiscount = () => {
  const { descuentos, getAllDiscounts, deleteOneDiscount } = useListDiscount();
  const { openModal, handlerOpenModal, active } = useModal();

  const deleteDiscount = (id: number, activo: boolean) => {
    const title = activo ? "desactivar" : "activar"
      Swal.fire({
        title: `¿Estas seguro de ${title} este descuento?`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#b2bec3",
        confirmButtonText: title.charAt(0).toUpperCase() + title.slice(1),
      }).then((result) => {
        if (result.isConfirmed) {
          const message = activo ? "Desactivado" : "Activado"
          deleteOneDiscount(id);
          Swal.fire(message, `El descuento ha sido ${message}.`, "success");
        }
      });
    };

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
                <FaPowerOff
                  className={`${styles.icon} ${
                    descuento.activo ? styles.active : styles.deactive
                  }`}
                  size={30}
                  onClick={() => deleteDiscount(descuento.id!, descuento.activo)}
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
