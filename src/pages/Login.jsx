import { useEffect } from "react";
import { Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// import { schema } from "../utils/schema";
import CustomInput from "../components/forms/CustomInput";
import CustomPassword from "../components/forms/CustomPassword";
import CustomButton from "../components/forms/CustomButton";
// import { authLoginThunk } from "../app/slice/authSlice";
function Login() {
  const dispatch = useDispatch();
  const navigation = useNavigate();
  //   const { isLoading, error, message } = useSelector((state) => state.authSlice);

  //   useEffect(() => {
  //     if (error) {
  //       toast.error(message);
  //     }
  //   }, [error]);
  let isLoading = false;

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-50 to-violet-50">
      <div className="grid grid-cols-2 gap-4 w-full max-w-2xl p-8 rounded shadow-2xl mx-2 bg-gradient-to-br from-white to-violet-100">
        <div>
          <h1 className="text-center text-2xl font-semibold mb-4 text-violet-700">
            Inicio de Sessión
          </h1>
          <Formik
            initialValues={{ username: "", password: "" }}
            // validationSchema={schema}
            onSubmit={(values) => {
              //   dispatch(authLoginThunk(values)).then((x) => {
              //     if (!x.error) navigation("/home");
              //   });
            }}
          >
            {({ handleSubmit }) => (
              <form onSubmit={handleSubmit}>
                <CustomInput
                  title="Usuario:"
                  name="username"
                  type="text"
                  placeholder="admin123"
                />
                <CustomPassword
                  title="Contraseña:"
                  name="password"
                  type="password"
                  placeholder="admin123"
                />

                <CustomButton type="submit" disabled={isLoading}>
                  {isLoading ? "Validando..." : "Ingresar"}
                </CustomButton>
              </form>
            )}
          </Formik>
        </div>
        <div className="flex items-center justify-center">
          {/* <Lottie animationData={loginLottie} className="max-w-xs mx-auto" /> */}
        </div>
      </div>
    </div>
  );
}

export default Login;
