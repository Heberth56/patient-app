import { useEffect } from "react";
import {
  listPatientDataThunk,
  removePatientDataThunk,
  patientData,
  patientError,
  patientLoading,
  patientMessage,
} from "../app/slice/patientSlice";
import Options from "../components/tables/Options";
import TableContent from "../components/tables/TableContent";
import Confirm from "../components/ui/Confirm";
import toast, { Toaster } from "react-hot-toast";
import Navbar from "../components/ui/Navbar";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const PacientesAdmin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const data = useSelector(patientData);
  const error = useSelector(patientError);
  const isLoading = useSelector(patientLoading);
  const message = useSelector(patientMessage);

  useEffect(() => {
    if (error) toast.error(message);
  }, [error]);

  useEffect(() => {
    dispatch(listPatientDataThunk());
  }, [dispatch]);

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
      accessorFn: (row) => {
        return `${row.paterno} ${row.materno} ${row.nombre}`
          .toLowerCase()
          .replace(/\b\w/g, (char) => char.toUpperCase());
      },
    },
    {
      header: "Celular",
      accessorKey: "phone",
    },
    {
      header: "Opciones",
      accessorKey: "estado",
      cell: ({ row }) => (
        <Options
          to={`/pacientes/${row.original._id}`}
          onClick={() => handleConfirm(row.original)}
        />
      ),
    },
  ];

  const handleDelete = (id, toastId) => {
    toast.dismiss(toastId);
    dispatch(removePatientDataThunk(id))
      .unwrap()
      .then(() => {
        toast.success("Paciente eliminado exitosamente");
      });
  };

  const handleConfirm = (value) => {
    toast.remove();
    toast((t) => (
      <Confirm
        text={`¿Está seguro de que desea eliminar a <strong>${value.nombre}</strong>?`}
        onClick={() => handleDelete(value._id, t.id)}
      />
    ));
  };

  return (
    <div>
      <Navbar />
      <div className="md:w-1/2 w-full md:mx-auto px-4 py-5">
        <TableContent
          data={data}
          columns={columns}
          isLoading={isLoading}
          col={5}
        >
          <Toaster />
          <h1 className="text-xl font-bold">ADMINISTRACIÓN DE CLIENTES</h1>
          {/* <ButtonTable to="/clientes" /> */}
        </TableContent>
      </div>
    </div>
  );
};

export default PacientesAdmin;
