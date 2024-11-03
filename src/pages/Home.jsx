import Navbar from "../components/ui/Navbar";
import imgMedicine from "../assets/images/Medicine.png";
const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="container m-5 flex items-center flex-col justify-center">
        <h1 className="text-3xl text-indigo-800 font-semibold">
          BIENVENIDO AL SISTEMA
        </h1>
        <div className="flex flex-col md:flex-row items-center gap-4">
          <div className="container flex flex-col gap-2 md:justify-center md:h-96">
            <h2 className="text-xl font-bold text-gray-700 mb-2">
              Mediciones:
            </h2>
            <p className="text-lg font-semibold text-teal-800 border-b border-gray-500/50 pb-1">
              Medición general: 250
            </p>
            <p className="text-lg font-semibold text-teal-800 border-b border-gray-500/50 pb-1">
              Medición de óptica: 25
            </p>
            <p className="text-lg font-semibold text-teal-800 border-b border-gray-500/50 pb-1">
              Medición particular: 80
            </p>
          </div>
          <img
            src={imgMedicine}
            alt="Imagen del inicio"
            className="w-full md:w-1/2 h-96"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
