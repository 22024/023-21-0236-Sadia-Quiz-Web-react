import { MyNavbar } from "./Components/Navbar";
import Welcome from "./Components/Welcome";
import Footer from "./Components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes , Route} from "react-router-dom";
import About from "./Components/Aboutus";

function App() {
  return (
  <>
    < MyNavbar />
    <Routes>
      <Route path="/" element={<Welcome/>} />
      <Route path="/about" element={<About/>} />
    </Routes>
    {/* <Welcome/> */}
    <Footer />
    </>
  );
}

export default App;
