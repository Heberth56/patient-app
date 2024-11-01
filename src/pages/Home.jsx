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
        <img src={imgMedicine} alt="Imagen del inicio" className="w-1/2 h-96" />
      </div>
    </div>
  );
};

export default Home;
