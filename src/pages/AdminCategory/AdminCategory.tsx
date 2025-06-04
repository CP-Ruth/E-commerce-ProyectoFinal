import { TableHeadCategory } from "../../components/Table/TableRowHead";
import styles from "./AdminCategory.module.css";

const AdminCategory = () => {
  return (
    <>
      <section>
        <button className={styles.button}>Añadir Categoría</button>
        <table className={styles.tableUser}>
          <thead>
            <TableHeadCategory />
          </thead>
          <tbody></tbody>
        </table>
      </section>
    </>
  );
};

export default AdminCategory;
