import * as Yup from "yup";

//Defino los campos del fomrulario y el mensaje que va a mostrar si no se cumplen.
export const schemaForm = Yup.object({
  name: Yup.string().required("El nombre es obligatorio"),
  lastName: Yup.string().required("El apellido es obligatorio"),
  address: Yup.string().required("Proporcione una dirección"),
  department: Yup.string().required("Obligatorio"),
  email: Yup.string()
    .email("Invalid email")
    .required("El email es obligatorio"),
  password: Yup.string()
    .min(5, "La contraseña debe tener al menos 5 caracteres")
    .max(12, "La contraseña no debe tener más de 12 caracteres")
    .matches(/[A-Za-z]/, "La contraseña debe tener almeos una letra")
    .matches(/\d/, "La contraseña debe tener almenos un número")
    .required("Campo obligatorio"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "No hay coincidencia")
    .required("Campo obligatorio"),
});
