import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbarr from "./Componenti/Navbar";
import Home from "./Pages/Home";

function App() {
  return (
   <BrowserRouter>
      <Navbarr/>
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
   </BrowserRouter>
  );
}

export default App;
