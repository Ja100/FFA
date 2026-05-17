import Home from "./components/Home.jsx"
import { ChevronRight } from "lucide-react"

function App() {

  return (
    <>
     <Home/>

     <div className="text-white w-3xl text-center flex items-center justify-center mx-120 my-40  h-60 flex-col gap-5">
        <h1 className="text-7xl font-bold">Unlimited movies, TV shows, and more</h1>
     <h3 className="text-lg font-bold">Starts at US$2.99. Cancel anytime.</h3>
     <p className="text-lg font-medium">Ready to watch? Enter your email to create or restart your membership.</p>
     <div className="flex gap-2">
        <input type="text" placeholder="Email Address" className='text-md font-medium flex justify-center border border-white/30 rounded-md w-full h-14 px-4'/>
        <button className='flex justify-center items-center bg-red-600 w-xs text-2xl h-14  rounded-md font-medium'>Get Started
          <ChevronRight/>
        </button>
     </div>
     </div>
     
    </>
  )
}

export default App
