import { useEffect } from "react";
import { TableHeadCategory } from "../../components/Table/TableRowHead";
import useListCategory from "../../hooks/useListCategory";
import styles from "./AdminCategory.module.css";
import { TableRowCategory } from "../../components/Table/TableRow";
import { MdEdit } from "react-icons/md";
import useModal from "../../hooks/useModal";
import { ICategory } from "../../types/IDetailsProduct";
import CategoryForm from "./CategoryForm/CategoryForm";

const AdminCategory = () => {
  const { categorias, getAllCategories } = useListCategory();
  const { openModal, handlerOpenModal, active } = useModal();

  useEffect(() => {
    getAllCategories();
  }, []);

  return (
    <>
      <section>
        <button
          className={styles.button}
          onClick={() => handlerOpenModal(null, "edit")}
        >
          Añadir Categoría
        </button>
        <div className={styles.containerTable}>
          <table className={styles.tableUser}>
            <thead>
              <TableHeadCategory />
            </thead>
            <tbody>
              {categorias?.map((categoria) => (
                <TableRowCategory key={categoria.id} categoria={categoria}>
                  <MdEdit
                    size={30}
                    className={styles.icon}
                    onClick={() => handlerOpenModal(categoria, "edit")}
                  />
                </TableRowCategory>
              ))}
            </tbody>
          </table>
        </div>
        {openModal.edit && (
          <CategoryForm
            category={active as ICategory}
            onClose={() => handlerOpenModal(null, "edit")}
          />
        )}
      </section>
    </>
  );
};

export default AdminCategory;
