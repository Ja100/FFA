import Home from "./components/Home.jsx"


function App() {

  return (
    <>
     <Home/>

     <div className="text-white ">
        <h1>Unlimited movies, TV shows, and more</h1>
     <h3>Starts at US$2.99. Cancel anytime.</h3>
     <p>Ready to watch? Enter your email to create or restart your membership.</p>
     <input type="text" placeholder="Email Address"/>
     <button>Get Started </button>
     </div>
     
    </>
  )
}

export default App
