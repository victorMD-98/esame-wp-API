import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbarr from "./Componenti/Navbar";
import Home from "./Pages/Home";
import DettUser from "./Pages/DettUser";

function App() {
  return (
   <BrowserRouter>
      <Navbarr/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/:id" element = {<DettUser/>}/>
      </Routes>
   </BrowserRouter>
  );
}

export default App;
