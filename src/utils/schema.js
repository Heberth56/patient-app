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
