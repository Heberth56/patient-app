import ButtonNav from "./ButtonNav";
import { FaSignOutAlt, FaUserShield, FaHome } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-center px-5 py-4 shadow-md">
      <div className="flex gap-2">
        <ButtonNav text="Home" to="/home">
          <FaHome />
        </ButtonNav>
        <ButtonNav text="Pacientes" to="/pacientes">
          <FaUserShield />
        </ButtonNav>
        <ButtonNav text="Listado Pacientes" to="/examenes/admin">
          <FaUserShield />
        </ButtonNav>
        <ButtonNav text="Salir" to="/" out={true}>
          <FaSignOutAlt />
        </ButtonNav>
      </div>
    </nav>
  );
};

export default Navbar;
