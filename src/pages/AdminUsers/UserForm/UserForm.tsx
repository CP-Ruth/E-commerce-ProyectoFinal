import { ChangeEvent, FC, FormEvent, useState } from "react";
import styles from "./UserForm.module.css";
import { IoMdClose } from "react-icons/io";
import Input from "../../../components/Input/Input";
import { IUser } from "../../../types/IUser";
import Select from "../../../components/Select/Select";
import { useAuth } from "../../../hooks/useAuth";
import { useStoreUsers } from "../../../store/useStoreUsers";
import { getUserByEmail } from "../../../services/authService";
import Swal from "sweetalert2";

interface PropsUserForm {
  onClose: () => void;
}

const initial = {
  nombre: "",
  apellido: "",
  dni: 0,
  email: "",
  password: "",
  rol: "",
  direccion: "",
  localidad: "",
  provincia: "",
};

const UserForm: FC<PropsUserForm> = ({ onClose }) => {
  const [userForm, setUserForm] = useState(initial);
  const { registerUser } = useAuth();
  const [loading, setLoading] = useState(false);
  const addUser = useStoreUsers((state) => state.addUserList);

  const handlerDetailsChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserForm({
      ...userForm,
      [e.target.name]: e.target.value,
    });
  };

  const handlerSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const token = await registerUser(userForm, false);
    const user = await getUserByEmail(userForm.email, token!.token);

    if (user) {
      addUser(user);
      onClose();
      Swal.fire("Usuario creado correctamente", "", "success");
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handlerSubmit}>
        <IoMdClose className={styles.close} size={30} onClick={onClose} />
        <h2 className={styles.title}>Crear Usuario</h2>
        <div className={styles.formContainer}>
          <Input
            name="nombre"
            value={userForm.nombre}
            onChange={handlerDetailsChange}
            text="Nombre"
          />
          <Input
            name="apellido"
            value={userForm.apellido}
            onChange={handlerDetailsChange}
            text="Apellido"
          />
          <Input
            name="dni"
            type="number"
            value={userForm.dni}
            onChange={handlerDetailsChange}
            text="DNI"
          />
          <Input
            name="email"
            value={userForm.email}
            onChange={handlerDetailsChange}
            text="Email"
          />
          <Input
            name="password"
            type="password"
            value={userForm.password}
            onChange={handlerDetailsChange}
            text="Contraseña"
          />
          <Select
            name="rol"
            value={userForm.rol}
            onChange={(e: ChangeEvent<HTMLSelectElement>) =>
              setUserForm({
                ...userForm,
                rol: e.target.value as IUser["rol"],
              })
            }
            options={["USUARIO", "ADMIN"]}
            text="Rol"
          />
          <Input
            name="direccion"
            value={userForm.direccion}
            onChange={handlerDetailsChange}
            text="Direccion"
          />
          <Input
            name="localidad"
            value={userForm.localidad}
            onChange={handlerDetailsChange}
            text="Localidad"
          />
          <Input
            name="provincia"
            value={userForm.provincia}
            onChange={handlerDetailsChange}
            text="Provincia"
          />
        </div>
        <div className={styles.options}>
          {loading ? (
            <p>Guardando...</p>
          ) : (
            <>
              <button className={styles.button} onClick={onClose}>
                Cancelar
              </button>
              <button className={styles.button}>Guardar</button>
            </>
          )}
        </div>
      </form>
    </div>
  );
};

export default UserForm;
