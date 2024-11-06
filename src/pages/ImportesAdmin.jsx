import { useEffect, useState } from "react";
import { Formik } from "formik";
import {
  filterConsultDataThunk,
  consultData,
  consultError,
  consultLoading,
  consultMessage,
} from "../app/slice/consultSlice";
import toast, { Toaster } from "react-hot-toast";
import Navbar from "../components/ui/Navbar";
import { useDispatch, useSelector } from "react-redux";
import CustomInput from "../components/forms/CustomInput";
const ImportesAdmin = () => {
  const dispatch = useDispatch();

  const data = useSelector(consultData);
  const error = useSelector(consultError);
  const isLoading = useSelector(consultLoading);
  const message = useSelector(consultMessage);

  useEffect(() => {
    if (error) toast.error(message);
  }, [error]);

  const handleSubmit = (values, reset_form) => {
    if (values.anio) {
      dispatch(filterConsultDataThunk(values.anio));
    }
  };

  return (
    <div>
      <Navbar />
      <div className=" w-full md:mx-auto px-4 py-5">
        <Formik
          initialValues={{ anio: "" }}
          enableReinitialize={true}
          // validationSchema={}
          onSubmit={(values, { resetForm }) => {
            handleSubmit(values, resetForm);
          }}
        >
          {({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <div className="md:w-1/3 w-full px-4 py-5 flex gap-2">
                <CustomInput
                  title="Ingrese el año a buscar"
                  name="anio"
                  type="number"
                  placeholder="2023"
                />
                <button
                  onClick={handleSubmit}
                  type="button"
                  disabled={isLoading}
                  className=" text-teal-800 text-base font-bold"
                >
                  {isLoading ? "Guardando" : "Buscar"}
                </button>
              </div>
            </form>
          )}
        </Formik>
        <table className="table-auto w-full bg-white border border-gray-200">
          <thead>
            <tr className="bg-sky-950 p-5 text-white">
              <th className="py-2 px-4 text-left uppercase">#</th>
              <th className="py-2 px-4 text-left uppercase">CÓDIGO</th>
              <th className="py-2 px-4 text-left uppercase">
                APELLIDOS Y NOMBRES
              </th>
              <th className="py-2 px-4 text-left uppercase">FECHA INGRESO</th>
              <th className="py-2 px-4 text-left uppercase">EDAD</th>
              <th className="py-2 px-4 text-left uppercase">TIEMPO</th>
              <th className="py-2 px-4 text-left uppercase">MONTO</th>
            </tr>
          </thead>
          <tbody>
            {data[0]?.map((elem, index) => {
              return (
                <tr key={index} className="text-gray-600 hover:bg-gray-100">
                  <td>{index + 1}</td>
                  <td>{elem.codigo}</td>
                  <td>{elem.nombres}</td>
                  <td>{elem.fecha}</td>
                  <td>{elem.edad}</td>
                  <td>Anual</td>
                  <td>{elem.costo}</td>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            {data[0]?.length != 0 ? (
              <tr>
                <td colSpan={6} className="text-right font-bold">
                  Total:
                </td>
                <td>{data[1]?.costo_total}</td>
              </tr>
            ) : (
              <tr>
                <td colSpan={7} className="text-center font-bold">
                  No hay datos
                </td>
              </tr>
            )}
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default ImportesAdmin;
