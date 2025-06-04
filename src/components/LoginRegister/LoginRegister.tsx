import { ChangeEvent, FC, FormEvent, useState } from "react";
import styles from "./LoginRegister.module.css";
import * as Yup from "yup";
import { schemaRegister, schemaLogin } from "../../validations/validationForm";
import { IoMdClose } from "react-icons/io";
import { useAuth } from "../../hooks/useAuth";

type ModalProps = {
  onClose: () => void;
};

const initial = {
  nombre: "",
  apellido: "",
  dni: 0,
  email: "",
  password: "",
  direccion: "",
  localidad: "",
  codigoPostal: "",
  provincia: "",
  rol: "USUARIO"
};

const loginInitial = {
  username: "",
  password: "",
};

const LoginRegister: FC<ModalProps> = ({ onClose }) => {
  const { loginUser, registerUser } = useAuth();
  const [loginData, setLoginData] = useState(loginInitial);
  const [registerData, setRegisterData] = useState(initial);
  // Manejo de formularios y errores.
  const [isRegisterMode, setIsRegisterMode] = useState(true);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  //Funcion: Maneja el cambio de los inputs y actualiza formData
  const handleChange = async (
    e: ChangeEvent<HTMLInputElement>,
    register?: boolean
  ) => {
    const { name, value } = e.target;
    const validate = register || false;

    if (validate) {
      setLoginData((state) => ({ ...state, [name]: value }));
    } else {
      setRegisterData((state) => ({ ...state, [name]: value }));
    }
    setErrors((errors) => ({ ...errors, [name]: "" }));
  };

  //Funcion para cuando enviamos el formulario.
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      if (registerData.nombre !== "") {
        await schemaRegister.validate(registerData, { abortEarly: false });
        registerUser(registerData, true);
      } else {
        await schemaLogin.validate(loginData, { abortEarly: false });
        loginUser(loginData);
      }
      onClose();
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
            onClick={() => {
              setIsRegisterMode(true);
              setRegisterData(initial);
            }}
          >
            Ingresar
          </button>
          <button
            type="button"
            className={isRegisterMode ? "" : styles.active}
            onClick={() => {
              setIsRegisterMode(false);
              setLoginData(loginInitial);
            }}
          >
            Registro
          </button>
        </div>
        <form onSubmit={handleSubmit} className={styles.containerForm}>
          {isRegisterMode ? (
            <div className={styles.form}>
              <input
                type="email"
                name="username"
                value={loginData.username}
                placeholder="Correo"
                onChange={(e) => handleChange(e, true)}
                required
              />
              <input
                type="password"
                name="password"
                value={loginData.password}
                placeholder="Contraseña"
                onChange={(e) => handleChange(e, true)}
                required
              />
            </div>
          ) : (
            <div className={styles.form}>
              <input
                type="text"
                name="nombre"
                value={registerData.nombre}
                placeholder="Nombre"
                onChange={handleChange}
                required
              />
              {errors.nombre && (
                <span className={styles.error}>{errors.nombre}</span>
              )}
              <input
                type="text"
                name="apellido"
                value={registerData.apellido}
                placeholder="Apellido"
                onChange={handleChange}
                required
              />
              {errors.apellido && (
                <span className={styles.error}>{errors.apellido}</span>
              )}
              <input
                type="number"
                name="dni"
                value={registerData.dni}
                placeholder="Dni"
                onChange={handleChange}
                required
              />
              {errors.dni && <span className={styles.error}>{errors.dni}</span>}
              <input
                type="email"
                name="email"
                value={registerData.email}
                placeholder="Correo"
                onChange={handleChange}
                required
              />
              {errors.username && (
                <span className={styles.error}>{errors.username}</span>
              )}
              <input
                type="password"
                name="password"
                value={registerData.password}
                placeholder="Contraseña"
                onChange={handleChange}
                required
              />
              {errors.password && (
                <span className={styles.error}>{errors.password}</span>
              )}
              <input
                type="text"
                name="direccion"
                value={registerData.direccion}
                placeholder="Direccion"
                onChange={handleChange}
                required
              />
              {errors.direccion && (
                <span className={styles.error}>{errors.direccion}</span>
              )}
              <input
                type="text"
                name="localidad"
                value={registerData.localidad}
                placeholder="Localidad"
                onChange={handleChange}
                required
              />
              {errors.localidad && (
                <span className={styles.error}>{errors.localidad}</span>
              )}
              <input
                type="number"
                name="codigoPostal"
                value={registerData.codigoPostal}
                placeholder="Codigo Postal"
                onChange={handleChange}
                required
              />
              {errors.codigoPostal && (
                <span className={styles.error}>{errors.codigoPostal}</span>
              )}
              <input
                type="text"
                name="provincia"
                value={registerData.provincia}
                placeholder="Provincia"
                onChange={handleChange}
                required
              />
              {errors.provincia && (
                <span className={styles.error}>{errors.provincia}</span>
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

export default LoginRegister;
