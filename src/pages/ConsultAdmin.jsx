import { useEffect, useState } from "react";
import {
  listConsultDataThunk,
  consultData,
  consultError,
  consultLoading,
  consultMessage,
} from "../app/slice/consultSlice";
import TableContent from "../components/tables/TableContent";
import toast, { Toaster } from "react-hot-toast";
import Navbar from "../components/ui/Navbar";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { medicion } from "../utils/dataExtra";
const ConsultAdmin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const data = useSelector(consultData);
  const error = useSelector(consultError);
  const isLoading = useSelector(consultLoading);
  const message = useSelector(consultMessage);

  const [aux, setAux] = useState([]);

  useEffect(() => {
    if (error) toast.error(message);
  }, [error]);

  useEffect(() => {
    dispatch(listConsultDataThunk());
  }, [dispatch]);

  useEffect(() => {
    if (data && data?.length !== 0) setAux(data);
  }, [data]);

  const columns = [
    {
      header: "N°",
      accessorFn: (row, i) => i + 1,
      id: "index",
    },
    {
      header: "Código",
      accessorKey: "codigo",
    },
    {
      header: "Nombre completo",
      accessorKey: "nombres",
    },
    {
      header: "Fecha Ingreso",
      accessorKey: "fecha",
    },
    {
      header: "Edad",
      accessorKey: "edad",
    },
    {
      header: "Costo",
      accessorKey: "costo",
    },
  ];

  const handleSelectChange = (event) => {
    const value = event.target.value;
    console.log(aux);
    if (value) {
      setAux(data.filter((item) => item.type == value));
      return;
    }
    setAux(data);
  };

  return (
    <div>
      <Navbar />
      <div className=" w-full md:mx-auto px-4 py-5">
        <TableContent
          data={aux}
          columns={columns}
          isLoading={isLoading}
          col={7}
        >
          <Toaster />
          <h1 className="text-xl font-bold">ADMINISTRACIÓN DE CONSULTAS</h1>
          <h2 className="text-lg font-semibold text-sky-700">Agrupar por:</h2>
          <select
            className="text-teal-900 mb-5 mt-2 font-bold border border-teal-700 outline-none p-2 rounded-md"
            onChange={handleSelectChange}
          >
            <option value="" className="text-teal-700">
              Seleccione una opción a agrupar
            </option>
            {medicion.map((elem) => (
              <option key={elem._id} value={elem.type}>
                {elem.name}
              </option>
            ))}
          </select>
        </TableContent>
      </div>
    </div>
  );
};

export default ConsultAdmin;
