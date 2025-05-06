import { ChangeEvent, useState } from 'react'
import styles from './Modal.module.css'
import * as Yup from 'yup';
import Swal from "sweetalert2";

//Esquema de validación
//Defino los campos del fomrulario y el mensaje que va a mostrar si no se cumplen.
const schema = Yup.object({
    name: Yup.string().required('El nombre es obligatorio'),
    lastName: Yup.string().required('El apellido es obligatorio'),
    address: Yup.string().required('Proporcione una dirección'),
    department: Yup.string().required('Obligatorio'),
    email: Yup.string().email('Invalid email').required('El email es obligatorio'),
    password: Yup.string()
        .min(5, 'La contraseña debe tener al menos 5 caracteres')
        .max(12, 'La contraseña no debe tener más de 12 caracteres')
        .matches(/[A-Za-z]/, 'La contraseña debe tener almeos una letra')
        .matches(/\d/, 'La contraseña debe tener almenos un número')
        .required('Campo obligatorio'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password')], 'No hay coincidencia')
        .required('Campo obligatorio')
})

export const Modal = () => {
    //Estado del formulario: guarda los valores escritos por el usuario en los inputs
    const [formData, setFormData] = useState({
        name: "",
        lastName: "",
        address: "",
        department: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    //Estado para cambiar de formulario registro(true), login(false)
    const [isRegisterMode, setIsRegisterMode] = useState(true); //Estado para controlar el formulario 
    //Estado de errores (los mensjaes de validación)
    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    //Funcion: Maneja el cambio de los inputs y actualiza formData
    const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((state) => ({ ...state, [name]: value }));
        setErrors((errors) => ({ ...errors, [name]: '' }));
    };
    //Funcion para cuando enviamos el formulario.
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            // valida todo el formulario
            await schema.validate(formData, { abortEarly: false }); 
            Swal.fire("Formulario enviado correctamente", "", "success");
             //Limpiamos el formulario si todo va bien
            setFormData({
                name: "",
                lastName: "",
                address: "",
                department: "",
                email: "",
                password: "",
                confirmPassword: "",
            });
            setErrors({});
        } catch (err) {
            // Si hay errores de validación,
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
                <div className={styles.buttonsOption}>
                    <button
                        type="button"
                        className={isRegisterMode ? styles.active : ''}
                        onClick={() => setIsRegisterMode(true)}
                    >
                        Ingresar
                    </button>
                    <button
                        type="button"
                        className={isRegisterMode ? '' : styles.active}
                        onClick={() => setIsRegisterMode(false)}
                    >
                        Registro
                    </button>
                </div>
                <form onSubmit={handleSubmit} className={styles.containerForm}>
                    {isRegisterMode ? (
                        <div>
                            <input
                                type="email"
                                name='email'
                                value={formData.email}
                                placeholder='E-mail'
                                onChange={handleChange}
                                required />
                            <input
                                type="password"
                                name='password'
                                value={formData.password}
                                placeholder='Contraseña'
                                onChange={handleChange}
                                required />
                        </div>
                    ): (
                        <div>
                            <input
                                type="text"
                                name='name'
                                value={formData.name}
                                placeholder='Nombre'
                                onChange={handleChange}
                                required />
                            {errors.name && <span className={styles.error}>{errors.name}</span>}
                            <input
                                type="text"
                                name='lastName'
                                value={formData.lastName}
                                placeholder='Apellido'
                                onChange={handleChange}
                                required />
                            {errors.lastName && <span className={styles.error}>{errors.lastName}</span>}
                            <input
                                type="text"
                                name='address'
                                value={formData.address}
                                placeholder='Direccion'
                                onChange={handleChange}
                                required />
                            {errors.address && <span className={styles.error}>{errors.address}</span>}
                            <input
                                type="text"
                                name='department'
                                value={formData.department}
                                placeholder='Departamento'
                                onChange={handleChange}
                                required />
                            {errors.department && <span className={styles.error}>{errors.department}</span>}
                            <input
                                type="email"
                                name='email'
                                value={formData.email}
                                placeholder='E-mail'
                                onChange={handleChange}
                                required />
                            {errors.email && <span className={styles.error}>{errors.email}</span>}
                            <input
                                type="password"
                                name='password'
                                value={formData.password}
                                placeholder='Contraseña'
                                onChange={handleChange}
                                required />
                            {errors.password && <span className={styles.error}>{errors.password}</span>}
                            <input
                                type="password"
                                name='confirmPassword'
                                value={formData.confirmPassword}
                                placeholder='Repetir contraseña'
                                onChange={handleChange}
                                required />
                            {errors.confirmPassword && <span className={styles.error}>{errors.confirmPassword}</span>}
                        </div>
                    )}

                </form>

            </div>
        </div>
    )
}
