import { ChangeEvent, FC, FormEvent, useState } from "react";
import styles from "./ModalLoginRegister.module.css";
import * as Yup from "yup";
import Swal from "sweetalert2";
import { schemaForm } from "../../validations/validationForm";
import { IoMdClose } from "react-icons/io";

type ModalProps = {
  onClose: () => void;
};

const initial = {
  name: "",
  lastName: "",
  address: "",
  department: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const ModalLoginRegister: FC<ModalProps> = ({ onClose }) => {
  const [formData, setFormData] = useState(initial);
  const [isRegisterMode, setIsRegisterMode] = useState(true);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  //Funcion: Maneja el cambio de los inputs y actualiza formData
  const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((state) => ({ ...state, [name]: value }));
    setErrors((errors) => ({ ...errors, [name]: "" }));
  };

  //Funcion para cuando enviamos el formulario.
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await schemaForm.validate(formData, { abortEarly: false });
      Swal.fire("Formulario enviado correctamente", "", "success");

      setFormData(initial);
      setErrors({});
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const newErrors: { [key: string]: string } = {};
        err.inner.forEach((e) => {
          if (e.path) newErrors[e.path] = e.message;
        });
        setErrors(newErrors);
      }
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.modal}>
        <IoMdClose color="#000" size={30} cursor="pointer" onClick={onClose} />
        <div className={styles.buttonsOption}>
          <button
            type="button"
            className={isRegisterMode ? styles.active : ""}
            onClick={() => setIsRegisterMode(true)}
          >
            Ingresar
          </button>
          <button
            type="button"
            className={isRegisterMode ? "" : styles.active}
            onClick={() => setIsRegisterMode(false)}
          >
            Registro
          </button>
        </div>
        <form onSubmit={handleSubmit} className={styles.containerForm}>
          {isRegisterMode ? (
            <div className={styles.form}>
              <input
                type="email"
                name="email"
                value={formData.email}
                placeholder="E-mail"
                onChange={handleChange}
                required
              />
              <input
                type="password"
                name="password"
                value={formData.password}
                placeholder="Contraseña"
                onChange={handleChange}
                required
              />
            </div>
          ) : (
            <div className={styles.form}>
              <input
                type="text"
                name="name"
                value={formData.name}
                placeholder="Nombre"
                onChange={handleChange}
                required
              />
              {errors.name && (
                <span className={styles.error}>{errors.name}</span>
              )}
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                placeholder="Apellido"
                onChange={handleChange}
                required
              />
              {errors.lastName && (
                <span className={styles.error}>{errors.lastName}</span>
              )}
              <input
                type="text"
                name="address"
                value={formData.address}
                placeholder="Direccion"
                onChange={handleChange}
                required
              />
              {errors.address && (
                <span className={styles.error}>{errors.address}</span>
              )}
              <input
                type="text"
                name="department"
                value={formData.department}
                placeholder="Departamento"
                onChange={handleChange}
                required
              />
              {errors.department && (
                <span className={styles.error}>{errors.department}</span>
              )}
              <input
                type="email"
                name="email"
                value={formData.email}
                placeholder="E-mail"
                onChange={handleChange}
                required
              />
              {errors.email && (
                <span className={styles.error}>{errors.email}</span>
              )}
              <input
                type="password"
                name="password"
                value={formData.password}
                placeholder="Contraseña"
                onChange={handleChange}
                required
              />
              {errors.password && (
                <span className={styles.error}>{errors.password}</span>
              )}
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                placeholder="Repetir contraseña"
                onChange={handleChange}
                required
              />
              {errors.confirmPassword && (
                <span className={styles.error}>{errors.confirmPassword}</span>
              )}
            </div>
          )}
          <button className={styles.buttonConfirmar} type="submit">
            {isRegisterMode ? "INGRESAR" : "REGISTRARME"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ModalLoginRegister;
