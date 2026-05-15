import Home from "./components/Home.jsx"


function App() {

  return (
    <>
     <Home/>

     <div className="text-white w-3xl flex items-center justify-center mx-100 my-65  h-60 flex-col gap-5">
        <h1 className="text-7xl text-center font-bold">Unlimited movies, TV shows, and more</h1>
     <h3>Starts at US$2.99. Cancel anytime.</h3>
     <p>Ready to watch? Enter your email to create or restart your membership.</p>
     <input type="text" placeholder="Email Address" className='text-md font-medium flex justify-center border border-white/30 rounded-md w-36 h-10 py-2 mx-3'/>
     <button className='bg-red-600 w-32 h-10 px-3 rounded-md font-medium'>Get Started </button>
     </div>
     
    </>
  )
}

export default App
