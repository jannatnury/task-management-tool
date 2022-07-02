import { Routes, Route } from "react-router-dom";
import Calender from "./Components/Calender";
import CompletedTasks from "./Components/CompletedTasks";
import Home from "./Components/Home";
import NotFound from "./Components/NotFound";
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
      <Route path="/completed" element={<CompletedTasks/>}/>
      <Route path="*" element={<NotFound/>}/>
     </Routes>
     <Footer/>
     </Navbar>
     
    </>
  );
}

export default App;
