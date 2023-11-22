import { MyNavbar } from "./Components/Navbar";
import Welcome from "./Components/Welcome";
import {Statistics} from "./Components/Statistics";
import {Security} from "./Components/Security";
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
  <>
    < MyNavbar />
    < Welcome />
    <Statistics/>
    <Security/>
    </>
  );
}

export default App;
