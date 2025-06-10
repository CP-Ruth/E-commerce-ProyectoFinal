import * as Yup from "yup";

export const schemaRegister = Yup.object({
  nombre: Yup.string()
    .trim()
    .min(2, "El nombre debe tener al menos 2 caracteres")
    .max(50, "El nombre no puede exceder los 50 caracteres")
    .required("El nombre es obligatorio."),
  apellido: Yup.string()
    .trim()
    .min(2, "El apellido debe tener al menos 2 caracteres")
    .max(50, "El apellido no puede exceder los 50 caracteres")
    .required("El apellido es obligatorio."),
  dni: Yup.string()
    .matches(/^\d{7,8}$/, "El DNI debe contener 7 u 8 dígitos numéricos.")
    .required("El DNI es obligatorio."),
  direccion: Yup.string()
    .trim()
    .min(5, "La dirección debe tener al menos 5 caracteres")
    .max(100, "La dirección no puede exceder los 100 caracteres")
    .required("La dirección es obligatoria."),
  localidad: Yup.string()
    .trim()
    .min(2, "La localidad debe tener al menos 2 caracteres")
    .max(50, "La localidad no puede exceder los 50 caracteres")
    .required("La localidad es obligatoria."),
  provincia: Yup.string()
    .trim()
    .min(2, "La provincia debe tener al menos 2 caracteres")
    .max(50, "La provincia no puede exceder los 50 caracteres")
    .required("La provincia es obligatoria."),
  email: Yup.string()
    .email("Por favor, introduce un correo electrónico válido.")
    .required("El correo electrónico es obligatorio."),
  password: Yup.string()
    .min(8, "La contraseña debe tener al menos 8 caracteres.")
    .max(20, "La contraseña no puede exceder los 20 caracteres.")
    .matches(
      /[a-z]/,
      "La contraseña debe contener al menos una letra minúscula."
    )
    .matches(
      /[A-Z]/,
      "La contraseña debe contener al menos una letra mayúscula."
    )
    .matches(/\d/, "La contraseña debe contener al menos un número.")
    .matches(
      /[^a-zA-Z0-9]/,
      "La contraseña debe contener al menos un carácter especial (ej. !@#$%^&*)."
    )
    .required("La contraseña es obligatoria."),
});

export const schemaLogin = Yup.object({
  username: Yup.string().required("El email es obligatorio"),
  password: Yup.string().required("Campo obligatorio"),
});
