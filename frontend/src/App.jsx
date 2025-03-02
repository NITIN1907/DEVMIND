import {BrowserRouter, Routes,Route} from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import {Contact} from "./pages/Contact";
import { Service } from "./pages/Service";
import { Login } from "./pages/Login";
import {Navbar} from "./Components/Navbar";
import { Register } from "./pages/Register";
import { Logout } from "./pages/Logout";
const App=()=>{
    return (
  
    <BrowserRouter>
    <Navbar/>
    <Routes>
        <Route path="/" element={<Home/>}/> 
        <Route path="/About" element={<About />}/>
        <Route path="/Contact" element={<Contact />}/>
        <Route path="/service" element={<Service />}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/logout" element={<Logout/>}/>
    </Routes>
    </BrowserRouter>
    
)}

export default App;