import {Navbar} from "./components/Navbar.jsx"
import Contacts from "./pages/contacts.jsx";
import Service from "./pages/services.jsx";
import LogIn from "./components/Login.jsx";
import {Routes, Route} from "react-router-dom";
import Dashboard from "./components/Dashboard.jsx";
import Services from "./components/Services.jsx";
import Welcome from "./components/welcome.jsx";
import Dashboard2 from "./components/Dashboard2.jsx";

function App(){
  return(
    <>
      <Navbar/>
      <Welcome name="Remy" price="500"/>
      <Routes>
        <Route path="/" element={<h1 className="text-3xl text-center mt-5">Home Page</h1>}/>
        <Route path="/contact" element={<Contacts/>}/>
        <Route path="/service" element={<Service/>}/>
        <Route path="/services" element={<Services name="Creating website and application" price="500"/>}/>
        <Route path="/login" element={<LogIn/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/dashboard2" element={<Dashboard2/>}/>
      </Routes>
    </>
  )
}
export default App;