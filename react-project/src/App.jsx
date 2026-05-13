import { Navbar } from "./components/navbar.jsx";
import Contacts from "./pages/contacts.jsx";
import Services from "./pages/services.jsx";
import { Routes, Route } from "react-router-dom";

function App(){
  return(
    <>
    <Navbar/>
    <Routes>
      <Route path="/contact" element = {<Contacts />}/>
      <Route path="/service" element = {<Services />}/>
    </Routes>
    

    {/* <div className="bg-green-400">
      <h1 className="border-y-2 border-green-600 p-3 m-2">Welcome to ReactJS</h1>
      <button className="bg-blue-600 text-white text-2xl p-4 m-2 rounded-2xl hover:bg-blue-400">Click me</button>
      <input className="border bg-gray-600 p-3 text-2xl text-white"/>
    </div>
  
    <div className="bg-amber-300 text-2xl border-2 p-3 m-4 rounded-2xl w-80">
      <p className="text-center">Future Focus Academy</p>
    </div> */}

    </>
  )
}
export default App;