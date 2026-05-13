import {Navbar} from "./components/Navbar.jsx"
import Contacts from "./pages/contacts.jsx";
import Services from "./pages/services.jsx";
import {Routes, Route} from "react-router-dom";
function App(){
  return(
    <>
      <Navbar/>
      <Routes>
        <Route path="/contact" element={<Contacts/>}/>
        <Route path="/service" element={<Services/>}/>
      </Routes>
    </>
  )
}
export default App;