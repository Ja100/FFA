import {Navbar} from "./components/Navbar.jsx"
import Contacts from "./pages/contacts.jsx";
import Services from "./pages/services.jsx";
import LogIn from "./components/Login.jsx";
import {Routes, Route} from "react-router-dom";
function App(){
  return(
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<h1 className="text-3xl text-center mt-5">Home Page</h1>}/>
        <Route path="/contact" element={<Contacts/>}/>
        <Route path="/service" element={<Services/>}/>
        <Route path="/login" element={<LogIn/>}/>
      </Routes>
    </>
  )
}
export default App;