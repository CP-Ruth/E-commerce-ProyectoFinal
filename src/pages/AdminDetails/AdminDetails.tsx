import { useListDetails } from "../../hooks/useListDetails";
import { useEffect } from "react";
import styles from "./AdminDetails.module.css";
import { TableHeadDetail } from "../../components/Table/TableRowHead";
import { TableRowDetail } from "../../components/Table/TableRow";
import { MdEdit } from "react-icons/md";
import { FaPowerOff, FaRegEye } from "react-icons/fa";
import useModal from "../../hooks/useModal";
import Swal from "sweetalert2";
import { IDetailsProduct } from "../../types/IDetailsProduct";
import DetailInfo from "./DetailInfo/DetailInfo";
import DetailForm from "./DetailForm/DetailForm";

const AdminDetails = () => {
  const { details, getAllDetails, deleteOneDetail } = useListDetails();
  const { openModal, productActive, handlerOpenModal } = useModal();

  const deleteProduct = (id: number) => {
    Swal.fire({
      title: "¿Estas seguro de desactivar este producto?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#b2bec3",
      confirmButtonText: "Desactivar",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteOneDetail(id);
        Swal.fire(
          "Desactivado!",
          "El producto ha sido desactivado.",
          "success"
        );
      }
    });
  };

  useEffect(() => {
    getAllDetails();
  }, []);

  return (
    <>
      <section>
        <table className={styles.tableUser}>
          <thead>
            <TableHeadDetail />
          </thead>
          <tbody>
            {details &&
              details.length > 0 &&
              details.map((detalle) => (
                <TableRowDetail key={detalle.id} detalle={detalle}>
                  <FaRegEye
                    size={30}
                    className={styles.icon}
                    onClick={() => handlerOpenModal(detalle, "info")}
                  />
                  <MdEdit
                    size={30}
                    className={styles.icon}
                    onClick={() => handlerOpenModal(detalle, "edit")}
                  />

                  <FaPowerOff
                    className={`${styles.icon} ${
                      detalle.activo ? styles.active : styles.deactive
                    }`}
                    size={30}
                    onClick={() => deleteProduct(detalle.id!)}
                  />
                </TableRowDetail>
              ))}
          </tbody>
        </table>
      </section>
      {openModal.info && (
        <DetailInfo
          detalle={productActive! as IDetailsProduct}
          onClose={() => handlerOpenModal(productActive! as IDetailsProduct, "info")}
        />
      )}
      {openModal.edit && (
        <DetailForm
          detalle={productActive! as IDetailsProduct}
          onClose={() => handlerOpenModal(productActive! as IDetailsProduct, "edit")}
        />
      )}
    </>
  );
};

export default AdminDetails;
