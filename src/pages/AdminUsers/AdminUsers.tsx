import { useEffect } from "react";
import { TableRowUser } from "../../components/Table/TableRow";
import { TableHeadUser } from "../../components/Table/TableRowHead";
import { useListUsers } from "../../hooks/useListUsers";
import styles from "./AdminUsers.module.css";

const AdminUsers = () => {
  const { users, getAllUsers } = useListUsers();

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <section>
      <div></div>
      <table className={styles.tableUser}>
        <thead>
          <TableHeadUser />
        </thead>
        <tbody>
          {users &&
            users.length > 0 &&
            users.map((usuario) => (
              <TableRowUser key={usuario.id} usuario={usuario} />
            ))}
        </tbody>
      </table>
    </section>
  );
};

export default AdminUsers;
