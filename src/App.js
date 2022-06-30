import { Routes, Route } from "react-router-dom";
import About from "./Components/About";
import Home from "./Components/Home";
import Products from "./Components/Products";
import Navbar from "./Shared/Navbar";


function App() {
  return (
    <>
     <Navbar>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/products" element={<Products/>}/>
      <Route path="/about" element={<About/>}/>
     </Routes>
     </Navbar>
    </>
  );
}

export default App;
