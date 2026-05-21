import { Navbar } from "./components/navbar.jsx";
import Contacts from "./pages/contacts.jsx"
import Services from "./pages/services.jsx";
import Notes from "./pages/notes.jsx";
import { Home } from "./pages/home.jsx";
import Login from "./pages/login.jsx";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard.jsx";
import EventSummary from "./components/Event.jsx";

function App(){

  return(
    <>
     <Navbar/>
    <EventSummary/>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/contact" element = {<Contacts />}/>
      <Route path="/service" element = {<Services />}/>
      <Route path="/notes" element = {<Notes />}></Route>
      <Route path="/login" element = {<Login />}/>
      <Route path="/dashboard" element = {<Dashboard/>}/>
    </Routes>
    
    </>
    
  )
}
export default App;