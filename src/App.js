import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Workpage from "./pages/Workpage";
import ProjectDetails from "./pages/ProjectDetails";
import About from "./pages/About";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
function App() {
  return (<>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="WorksPage" element={<Workpage/>}/>
      <Route path="/project/:projectId" element={<ProjectDetails />}/>
      <Route path="about" element={<About/>}/>
      <Route path="Contact" element={<Contact/>} />
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
