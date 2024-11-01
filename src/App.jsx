import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Pacientes from "./pages/Pacientes";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/pacientes" element={<Pacientes />} />
    </Routes>
  );
};

export default App;
