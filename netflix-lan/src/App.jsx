import Home from "./components/Home.jsx"
import { ChevronRight } from "lucide-react"

function App() {

  return (
    <>
     <Home/>

     <div className="text-white text-center h-screen flex items-center justify-center flex-col gap-5">
        <h1 className="text-7xl w-3xl font-bold">Unlimited movies, TV shows, and more</h1>
     <h3 className="text-lg font-bold">Starts at US$2.99. Cancel anytime.</h3>
     <p className="text-lg font-medium">Ready to watch? Enter your email to create or restart your membership.</p>
     
     <div className="flex gap-2">
        <input type="text" placeholder="Email Address" className='bg-zinc-900/70 text-xl font-light placeholder:text-zinc-300 placeholder:font-normal placeholder:font-sans flex justify-center border border-white/30 rounded-md w-full h-14 px-4'/>
        <button className='flex justify-center items-center gap-2 bg-red-600 hover:bg-red-700 cursor-pointer w-sm text-2xl h-14 rounded-md font-semibold'>Get Started
          <ChevronRight size={33}/>
        </button>
     </div>
     </div>
     
    </>
  )
}

export default App
