import { Navbar } from "./components/navbar.jsx";
import Contacts from "./pages/contacts.jsx";
import Services from "./pages/services.jsx";
import { Home } from "./pages/home.jsx";
import { Routes, Route } from "react-router-dom";
import { useState , useEffect} from "react";


function App(){
  const [result, setResult] = useState();
const  Display = () => {
  const names = ["Chris", "John", "Dave", "Henry", "Alan", "Donald"];
  const count = names.length;

  if (count === 0) return <p>no one like this</p>
  if (count === 1) return <p>{names[0]} likes this</p>
  if (count === 2) return <p>{names[0]} , {names[1]} likes this</p>
  if (count === 3) return <p>{names[0]} , {names[1]} , {names[2]} likes this </p>
  return `${names[0]}, ${names[1]},   ${names[0]} , ${names[1]} and 2 others likes this`
}
useEffect(()=> {
  setResult(
    Display()
  )
},[])

  return(
    <>
     <Navbar/>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/contact" element = {<Contacts />}/>
      <Route path="/service" element = {<Services />}/>
    </Routes>
    

    

      <div>
        <p>{result}</p>
        
      </div>
  

    
    </>
    
  )
}


export default App;