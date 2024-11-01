import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Pacientes from "./pages/Pacientes";
import PacientesAdmin from "./pages/PacientesAdmin";
import Consultas from "./pages/Consultas";
import ConsultAdmin from "./pages/ConsultAdmin";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/pacientes" element={<Pacientes />} />
      <Route path="/pacientes/:patient_id" element={<Pacientes />} />
      <Route path="/pacientes/admin" element={<PacientesAdmin />} />
      <Route path="/consultas" element={<Consultas />} />
      <Route path="/consultas/:consult_id" element={<Consultas />} />
      <Route path="/consultas/admin" element={<ConsultAdmin />} />
    </Routes>
  );
};

export default App;
