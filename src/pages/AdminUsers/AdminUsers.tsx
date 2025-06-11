import { useEffect, useState } from "react";
import { TableRowUser } from "../../components/Table/TableRow";
import { TableHeadUser } from "../../components/Table/TableRowHead";
import { useListUsers } from "../../hooks/useListUsers";
import styles from "./AdminUsers.module.css";
import { FaPowerOff } from "react-icons/fa";
import Swal from "sweetalert2";
import UserForm from "./UserForm/UserForm";

const AdminUsers = () => {
  const { users, getAllUsers, deleteOneUser } = useListUsers();
  const [openModal, setOpenModal] = useState(false);

  const deleteProduct = (id: number, activo: boolean) => {
    const title = activo ? "desactivar" : "activar";
    Swal.fire({
      title: `¿Estas seguro de ${title} este usuario?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#b2bec3",
      confirmButtonText: title.charAt(0).toUpperCase() + title.slice(1),
    }).then((result) => {
      if (result.isConfirmed) {
        const message = activo ? "Desactivado" : "Activado";
        deleteOneUser(id);
        Swal.fire(message, `El usuario ha sido ${message}.`, "success");
      }
    });
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <section>
      <button className={styles.button} onClick={() => setOpenModal(true)}>
        Añadir usuario
      </button>
      <div className={styles.containerTable}>
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
                    onClick={() => deleteProduct(usuario.id!, usuario.activo)}
                  />
                </TableRowUser>
              ))}
          </tbody>
        </table>
      </div>
      {openModal && <UserForm onClose={() => setOpenModal(false)} />}
    </section>
  );
};

export default AdminUsers;
