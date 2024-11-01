import { useEffect } from "react";
import { Formik } from "formik";
import Navbar from "../components/ui/Navbar";
import FormContent from "../components/forms/FormContent";
import CustomInput from "../components/forms/CustomInput";
import CustomButton from "../components/forms/CustomButton";
const Pacientes = () => {
  let loading = false;
  return (
    <div>
      <Navbar />

      <Formik
        initialValues={{}}
        enableReinitialize={true}
        // validationSchema={}
        onSubmit={(values, { resetForm }) => {
          // handleSubmit(values, resetForm);
          console.log(values);
        }}
      >
        {({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <div className="md:w-1/2 w-full md:mx-auto px-4 py-5">
              <FormContent title="REGISTRO DE PACIENTES">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/2">
                    <CustomInput
                      title="Nombres"
                      name="name"
                      placeholder="Ingrese su nombre completo"
                    />

                    <CustomInput
                      title="Apellido paterno"
                      name="paterno"
                      placeholder="Ingrese su apellido"
                    />

                    <CustomInput
                      title="Apellido materno"
                      name="materno"
                      placeholder="Ingrese su apellido"
                    />
                  </div>
                  <div className="md:w-1/2">
                    <CustomInput
                      title="Edad:"
                      name="age"
                      type="number"
                      placeholder="25"
                      required={false}
                    />

                    <CustomInput
                      title="Teléfono/Celular:"
                      name="phone"
                      type="number"
                      placeholder="79652314"
                      required={false}
                    />
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-6">
                  <CustomButton
                    onClick={handleSubmit}
                    type="button"
                    disabled={loading}
                  >
                    {loading ? "Guardando" : "Guardar"}
                  </CustomButton>

                  <CustomButton
                    bg="bg-red-500"
                    disabled={loading}
                    type="button"
                    //   onClick={() => handleNavigate("/especialidad/admin")}
                  >
                    Cancelar
                  </CustomButton>
                </div>
              </FormContent>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Pacientes;
