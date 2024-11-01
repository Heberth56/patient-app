import { useNavigate } from "react-router-dom";
const ButtonNav = ({ text, to, out = false, children }) => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(to);
  };
  return (
    <button
      className={`flex items-center text-indigo-800  
      transition-colors duration-200 gap-1 py-1 px-3 rounded-md ${
        out ? "hover:bg-red-500 hover:text-white" : "hover:bg-gray-300"
      } bg-opacity-30`}
      onClick={handleNavigate}
    >
      <span className="text-sm sm:text-base">{children}</span>
      <span className="hidden sm:inline">{text}</span>
    </button>
  );
};

export default ButtonNav;
