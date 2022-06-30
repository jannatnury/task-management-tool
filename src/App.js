import { Routes, Route } from "react-router-dom";
import Calender from "./Components/Calender";
import Home from "./Components/Home";
import ToDo from "./Components/ToDo";
import Footer from "./Shared/Footer";
import Navbar from "./Shared/Navbar";


function App() {
  return (
    <>
     <Navbar>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/to-do" element={<ToDo/>}/>
      <Route path="/calender" element={<Calender/>}/>
     </Routes>
     <Footer/>
     </Navbar>
     
    </>
  );
}

export default App;
