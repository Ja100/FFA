import { Sparkles, MessageSquareQuote as TestimonyIcon, Tag as PriceIcon, UserPlus, UserCheck } from "lucide-react"
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg"
function Navbar(){

    return (
   
        <div className="px-4 bg-cyan-800 text-white flex justify-between items-center h-28">

            <Link to="/" className="flex items-center h-full">
                <img src={logo}
                    alt="Future Focus Logo"
                    className="h-20 bg-amber-50 object-contain rounded-full"
                />
            </Link>
            
            <ul className="flex items-center justify-end gap-x-4 text-sm font-semibold font-serif">
                <li 
                className="bg-amber-500 rounded-md w-36 h-9 cursor-pointer flex gap-2 items-center justify-center 
                transition-all duration-300 ease-in-out hover:bg-slate-100 hover:text-slate-900">
                    <TestimonyIcon size={18}/>
                    <Link to="/testimonials">
                     Testimonials</Link> 
                </li>
                <li 
                className="bg-green-500 w-28 h-9 cursor-pointer flex gap-2 items-center justify-center rounded-md
                transition-all duration-300 ease-in-out hover:bg-slate-100 hover:text-slate-900">
                   <Sparkles size={18}/>
                   <Link to="/features">Features</Link>
                </li>
                <li 
                className="bg-teal-600 w-28 h-9 cursor-pointer flex gap-2 items-center justify-center rounded-md 
                transition-all duration-300 ease-in-out hover:bg-slate-100 hover:text-slate-900">
                    <PriceIcon size={18}/>
                    <Link to="/pricing">Pricing</Link>
                </li>
                <div className="h-14 w-0.5 bg-cyan-600/60" />
                <li 
                className="px-4 py-2 cursor-pointer text-lg flex gap-2 items-center justify-center
                transition-colors duration-200 hover:text-amber-400">
                   <UserCheck size={18}/>
                   <Link to="/login">Login</Link>
                </li>
                <li 
                className="bg-white text-cyan-950 px-4 h-9 cursor-pointer flex gap-2 items-center justify-center 
                rounded-md 
                transition-all duration-300 ease-in-out 
                hover:bg-amber-500 hover:text-white">
                    <UserPlus size={18}/>
                    <Link to="/register">Sign Up</Link>
                </li>
            </ul>
        </div>

        
    
    )
    
}

export default Navbar;