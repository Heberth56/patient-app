import { useEffect } from "react";
import { Formik } from "formik";
import Navbar from "../components/ui/Navbar";
import FormContent from "../components/forms/FormContent";
import CustomInput from "../components/forms/CustomInput";
import CustomDropdown from "../components/forms/CustomDropdown";
import CustomButton from "../components/forms/CustomButton";
import toast, { Toaster } from "react-hot-toast";
import { listPatientDataThunk, patientData } from "../app/slice/patientSlice";
import {
  addConsultDataThunk,
  consultForm,
  consultLoading,
} from "../app/slice/consultSlice";
import { medicion } from "../utils/dataExtra";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
const Consultas = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const dataPatient = useSelector(patientData);
  const formData = useSelector(consultForm);
  const loading = useSelector(consultLoading);

  useEffect(() => {
    dispatch(listPatientDataThunk());
  }, [dispatch]);

  const handleSubmit = (values, reset_form) => {
    dispatch(addConsultDataThunk(values))
      .unwrap()
      .then(() => {
        toast.success("Consulta creado exitosamente");
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
                <div className="">
                  <CustomInput
                    title="Fecha:"
                    name="fecha"
                    type="date"
                    placeholder=""
                  />
                  <CustomDropdown
                    title="Paciente:"
                    name="patient_id"
                    disabled={loading}
                  >
                    <option value="" key="store">
                      Seleccione al paciente
                    </option>
                    {dataPatient.map((elem) => (
                      <option key={elem._id} value={elem._id}>
                        {elem.nombre} {elem.paterno} {elem.materno}
                      </option>
                    ))}
                  </CustomDropdown>

                  <CustomDropdown
                    title="Medición:"
                    name="medicion_type"
                    disabled={loading}
                  >
                    <option value="" key="mediciones">
                      Seleccione el tipo de Medición
                    </option>
                    {medicion.map((elem) => (
                      <option key={elem._id} value={elem.type}>
                        {elem.name}
                      </option>
                    ))}
                  </CustomDropdown>

                  <CustomInput
                    title="Costo de la medición:"
                    name="costo"
                    type="number"
                    placeholder="250"
                  />
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

export default Consultas;
