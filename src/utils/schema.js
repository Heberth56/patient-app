import * as Yup from "yup";
export const loginSchema = Yup.object().shape({
  username: Yup.string()
    .min(5, "Minimo de caracteres 5")
    .max(100, "Maximo de caracteres 100")
    .required("El usuario es requerido")
    .trim(),
  password: Yup.string()
    .min(5, "Minimo de caracteres 5")
    .max(100, "Maximo de caracteres 100")
    .required("El password es requerido"),
});

export const patientSchema = Yup.object().shape({
  nombre: Yup.string()
    .min(3, "Mínimo de 3 caracteres")
    .max(250, "Máximo de 250 caracteres")
    .required("Ingrese su nombre")
    .trim(),
  paterno: Yup.string()
    .min(3, "Mínimo de 3 caracteres")
    .max(250, "Máximo de 250 caracteres")
    .required("Ingrese su apellido paterno")
    .trim(),
  materno: Yup.string()
    .min(3, "Mínimo de 3 caracteres")
    .max(250, "Máximo de 250 caracteres")
    .required("Ingrese su apellido Materno")
    .trim(),
  age: Yup.number()
    .required("La edad es requerida")
    .min(1, "La edad debe ser al menos 1")
    .max(99, "La edad no puede ser mayor a 99")
    .integer("La edad debe ser un número entero"),

  phone: Yup.string()
    .matches(/^\d+$/, "El teléfono debe contener solo números")
    .min(6, "El teléfono debe tener al menos 6 dígitos")
    .max(25, "El teléfono no puede tener más de 25 dígitos")
    .required("Debe ingresar un teléfono/celular"),
  costo: Yup.number()
    .required("El costo es requerido")
    .min(1, "El costo debe ser al menos 1")
    .max(10000, "El costo no puede ser mayor a 10,000")
    .integer("El costo debe ser un número entero"),
});
