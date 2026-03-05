import Navbar from "./components/Navbar";
import Mainroutes from "./routes/Mainroutes";

const App = () => {
  return (
    <div className="w-screen h-screen py-10 px-[10%] bg-gray-800 text-white">
      <Navbar />
      <Mainroutes />
    </div>
  );
};

export default App;
