import Navbar from "../src/components/Navbar";
import Main from "../src/components/Main";
import Footer from "../src/components/Footer";
import { Routes, Route, Link} from "react-router-dom";
import StandardModels from "../src/pages/StandardModels";
import CustomBuilds from "../src/pages/CustomBuilds";
import AboutUs from "./pages/AboutUs";
import OurProjects from "../src/pages/OurProjects";
import ContactUs from "./pages/ContactUs";

function App() {
  return (
    <>
      {/* <Link to="/About">About</Link>
      <Link to="/standard models">Standard Models</Link>
      <Link to="/custom builds">Custom Builds</Link>
      <Link to="/about us">About Us</Link>
      <Link to="/our projects">Our Projects</Link> */}
      <Navbar></Navbar>
      <Routes>
        
        
        <Route path="/" element={<Main />} />
        <Route path="/standardmodels" element={<StandardModels />} />
        <Route path="/custombuilds" element={<CustomBuilds />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/ourprojects" element={<OurProjects />} />
        <Route path="/contactus" element={<ContactUs />} />
        
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
