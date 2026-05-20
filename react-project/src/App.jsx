import { Navbar } from "./components/navbar.jsx";
import Contacts from "./pages/contacts.jsx"
import Services from "./pages/services.jsx";
import { Home } from "./pages/home.jsx";
import Login from "./pages/login.jsx";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard.jsx";

function App(){

  return(
    <>
     <Navbar/>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/contact" element = {<Contacts />}/>
      <Route path="/service" element = {<Services />}/>
      <Route path="/login" element = {<Login />}/>
      <Route path="/dashboard" element = {<Dashboard/>}/>
    </Routes>
    
    </>
    
  )
}
export default App;