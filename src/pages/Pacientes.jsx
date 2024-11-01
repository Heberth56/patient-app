import { useEffect } from "react";
import { Formik } from "formik";
import Navbar from "../components/ui/Navbar";
import FormContent from "../components/forms/FormContent";
import CustomInput from "../components/forms/CustomInput";
import CustomButton from "../components/forms/CustomButton";
import toast, { Toaster } from "react-hot-toast";
import {
  addPatientDataThunk,
  editPatientDataThunk,
  getPatientDataThunk,
  resetState,
  patientForm,
  patientData,
  patientError,
  patientLoading,
  patientMessage,
} from "../app/slice/patientSlice";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
const Pacientes = () => {
  const navigate = useNavigate();
  const params = useParams();
  const dispatch = useDispatch();

  const data = useSelector(patientData);
  const error = useSelector(patientError);
  const formData = useSelector(patientForm);
  const loading = useSelector(patientLoading);
  const message = useSelector(patientMessage);

  useEffect(() => {
    if (params.patient_id) dispatch(getPatientDataThunk(params.patient_id));
    else dispatch(resetState());
  }, [params]);

  const handleSubmit = (values, reset_form) => {
    if (params.patient_id) {
      dispatch(
        editPatientDataThunk({
          _id: params.patient_id,
          name: values.nombre,
          paterno: values.paterno,
          materno: values.materno,
          age: values.age,
          phone: values.phone + "",
        })
      )
        .unwrap()
        .then(() => toast.success("Paciente editado exitosamente"));
      return;
    }

    dispatch(
      addPatientDataThunk({
        name: values.nombre,
        paterno: values.paterno,
        materno: values.materno,
        age: values.age,
        phone: values.phone + "",
      })
    )
      .unwrap()
      .then(() => {
        toast.success("Paciente creado exitosamente");
        reset_form();
      });
  };

  return (
    <div>
      <Navbar />
      <Formik
        initialValues={formData}
        enableReinitialize={true}
        // validationSchema={}
        onSubmit={(values, { resetForm }) => {
          handleSubmit(values, resetForm);
        }}
      >
        {({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <div className="md:w-1/2 w-full md:mx-auto px-4 py-5">
              <FormContent title="REGISTRO DE PACIENTES">
                <Toaster />
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/2">
                    <CustomInput
                      title="Nombres"
                      name="nombre"
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
                    onClick={() => navigate("/pacientes/admin")}
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
