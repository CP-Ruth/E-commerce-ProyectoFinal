import { useState, ChangeEvent, FormEvent } from "react";
import styles from "./UserProfile.module.css";
import { useAuth } from "../../hooks/useAuth";
import { updateUser } from "../../services/userService";
import Swal from "sweetalert2";
import { IUser } from "../../types/IUser";
import { useNavigate } from "react-router";

const UserProfile = () => {
  const { userActive, setUserActive } = useAuth();
  const [editMode, setEditMode] = useState(false);
  const navigate = useNavigate();

  const [formData, setFormData] = useState<IUser>({
    id: userActive?.id,
    nombre: userActive?.nombre!,
    apellido: userActive?.apellido!,
    dni: userActive?.dni!,
    username: userActive?.username!,
    password: userActive?.password!,
    rol: userActive?.rol!,
    direccion: userActive?.direccion!,
    activo: userActive?.activo!,
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddressChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      direccion: { ...formData.direccion, [name]: value },
    });
  };

  const handleLocalidadChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      direccion: {
        ...formData.direccion,
        localidad: { ...formData.direccion.localidad, [name]: value },
      },
    });
  };

  const handleProvinciaChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      direccion: {
        ...formData.direccion,
        localidad: {
          ...formData.direccion.localidad,
          provincia: {
            ...formData.direccion.localidad.provincia,
            [name]: value,
          },
        },
      },
    });
  };

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const updateUserActive = await updateUser(
        formData.id!,
        formData,
        localStorage.getItem("token")!
      );
      console.log(updateUserActive);
      if (updateUserActive) {
        setUserActive(updateUserActive);
        Swal.fire("Usuario actualizado correctamente", "", "success");
        setEditMode(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogout = () => {
    Swal.fire({
      title: "¿Estas seguro de cerrar tu sesion",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Si, Quiero",
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem("token");
        setUserActive(null);
        navigate("/");
        Swal.fire("Sesion cerrada correctamente", "", "success");
      }
    });
  };

  return (
    <div className={styles.userProfileContainer}>
      <h1>Perfil de Usuario</h1>
      {editMode ? (
        <form onSubmit={handleFormSubmit} className={styles.userProfileForm}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Nombre:</label>
            <input
              type="text"
              id="name"
              name="nombre"
              value={formData?.nombre}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="apellido">Apellido:</label>
            <input
              type="text"
              id="apellido"
              name="apellido"
              value={formData?.apellido}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="username"
              value={formData?.username}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="password">Contraseña:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData?.username}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="dni">DNI:</label>
            <input
              type="number"
              id="dni"
              name="dni"
              value={formData?.dni}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="direccion">Domicilio:</label>
            <input
              type="text"
              id="direccion"
              name="domicilio"
              value={formData?.direccion.domicilio}
              onChange={handleAddressChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="localidad">Localidad:</label>
            <input
              type="text"
              id="localidad"
              name="localidad"
              value={formData?.direccion.localidad.nombre}
              onChange={handleLocalidadChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="provincia">Provincia:</label>
            <input
              type="text"
              id="provincia"
              name="provincia"
              value={formData?.direccion.localidad.provincia.nombre}
              onChange={handleProvinciaChange}
              required
            />
          </div>
          <div className={styles.formActions}>
            <button type="submit" className={styles.saveButton}>
              Guardar Cambios
            </button>
            <button
              type="button"
              onClick={() => setEditMode(false)}
              className={styles.cancelButton}
            >
              Cancelar
            </button>
          </div>
        </form>
      ) : (
        <div className={styles.userDetails}>
          <p>
            <strong>Nombre:</strong> {userActive?.nombre} {userActive?.apellido}
          </p>
          <p>
            <strong>Correo:</strong> {userActive?.username}
          </p>
          <p className={styles.userAddress}>
            <strong>Dirección: </strong> {userActive?.direccion.domicilio}
          </p>
          <p>
            <strong>Documento: </strong> {userActive?.dni}
          </p>
          <p style={{ textTransform: "capitalize" }}>
            <strong>Localidad: </strong>{" "}
            {userActive?.direccion.localidad.nombre}
          </p>
          <p style={{ textTransform: "capitalize" }}>
            <strong>Provincia: </strong>{" "}
            {userActive?.direccion.localidad.provincia.nombre}
          </p>
          <div className={styles.userActions}>
            <button
              onClick={() => setEditMode(true)}
              className={styles.editButton}
            >
              Modificar Datos
            </button>
            <button onClick={handleLogout} className={styles.logoutButton}>
              Cerrar Sesión
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
