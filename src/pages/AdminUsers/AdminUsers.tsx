import { useEffect } from "react";
import { TableRowUser } from "../../components/Table/TableRow";
import { TableHeadUser } from "../../components/Table/TableRowHead";
import { useListUsers } from "../../hooks/useListUsers";
import styles from "./AdminUsers.module.css";
import { FaPowerOff } from "react-icons/fa";
import Swal from "sweetalert2";

const AdminUsers = () => {
  const { users, getAllUsers, deleteOneUser } = useListUsers();

  const deleteProduct = (id: number) => {
    Swal.fire({
      title: "¿Estas seguro de desactivar este usuario?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#b2bec3",
      confirmButtonText: "Desactivar",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteOneUser(id)
        Swal.fire("Desactivado!", "El usuario ha sido desactivado.", "success");
      }
    });
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <section>
      <table className={styles.tableUser}>
        <thead>
          <TableHeadUser />
        </thead>
        <tbody>
          {users &&
            users.length > 0 &&
            users.map((usuario) => (
              <TableRowUser key={usuario.id} usuario={usuario}>
                <FaPowerOff
                  className={`${styles.icon} ${
                    usuario.activo ? styles.active : styles.deactive
                  }`}
                  size={30}
                  onClick={() => deleteProduct(usuario.id)}
                />
              </TableRowUser>
            ))}
        </tbody>
      </table>
    </section>
  );
};

export default AdminUsers;
