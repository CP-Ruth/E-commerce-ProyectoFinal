import { TableRowUser } from "../AdminHome/TableRow/TableRow";
import TableHead from "../AdminHome/TableHead/TableHead";
import { usuarios } from "../../utils/usuarios";
import styles from "./AdminUsers.module.css";

const AdminUsers = () => {
  const columns = ["Nombre", "Email", "Direccion", "Provincia"];

  return (
    <section>
      <div></div>
      <table className={styles.tableUser}>
        <thead>
          <TableHead columns={columns} />
        </thead>
        <tbody>
          {usuarios.length > 0
            ? usuarios.map((usuario) => <TableRowUser user={usuario} />)
            : "No hay usuarios"}
        </tbody>
      </table>
    </section>
  );
};

export default AdminUsers;
