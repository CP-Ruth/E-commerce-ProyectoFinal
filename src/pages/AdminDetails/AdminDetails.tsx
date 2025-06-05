import { useListDetails } from "../../hooks/useListDetails";
import { useEffect } from "react";
import styles from "./AdminDetails.module.css";
import { TableHeadDetail } from "../../components/Table/TableRowHead";
import { TableRowDetail } from "../../components/Table/TableRow";
import { MdEdit } from "react-icons/md";
import { FaPowerOff, FaRegEye } from "react-icons/fa";
import useModal from "../../hooks/useModal";
import { IDetailsProduct } from "../../types/IDetailsProduct";
import DetailInfo from "./DetailInfo/DetailInfo";
import DetailForm from "./DetailForm/DetailForm";
import { swalStateMessage } from "../../utils/swalStateMessage";

const AdminDetails = () => {
  const { details, getAllDetails, deleteOneDetail } = useListDetails();
  const { openModal, active, handlerOpenModal } = useModal();

  const deleteProduct = (id: number) => {
    swalStateMessage(id, "detalle", deleteOneDetail);
  };

  useEffect(() => {
    getAllDetails();
  }, []);

  return (
    <>
      <section>
        <button
          className={styles.button}
          onClick={() => handlerOpenModal(null, "edit")}
        >
          Añadir Detalle
        </button>
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
          detalle={active! as IDetailsProduct}
          onClose={() =>
            handlerOpenModal(active! as IDetailsProduct, "info")
          }
        />
      )}
      {openModal.edit && (
        <DetailForm
          detalle={active! as IDetailsProduct}
          onClose={() =>
            handlerOpenModal(active! as IDetailsProduct, "edit")
          }
        />
      )}
    </>
  );
};

export default AdminDetails;
