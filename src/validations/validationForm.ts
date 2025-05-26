import * as Yup from "yup";

//Defino los campos del fomrulario y el mensaje que va a mostrar si no se cumplen.
export const schemaRegister = Yup.object({
  nombre: Yup.string().required("El nombre es obligatorio"),
  apellido: Yup.string().required("El apellido es obligatorio"),
  dni: Yup.number().required("El dni es obligatorio"),
  direccion: Yup.string().required("Proporcione una dirección"),
  localidad: Yup.string().required("Proporcione una localidad"),
  provincia: Yup.string().required("Proporcione una provincia"),
  email: Yup.string()
    .email("Invalid email")
    .required("El email es obligatorio"),
  password: Yup.string()
    .min(5, "La contraseña debe tener al menos 5 caracteres")
    .max(12, "La contraseña no debe tener más de 12 caracteres")
    .matches(/[A-Za-z]/, "La contraseña debe tener almeos una letra")
    .matches(/\d/, "La contraseña debe tener almenos un número")
    .required("Campo obligatorio"),
});

export const schemaLogin = Yup.object({
  username: Yup.string().required("El email es obligatorio"),
  password: Yup.string().required("Campo obligatorio"),
});
