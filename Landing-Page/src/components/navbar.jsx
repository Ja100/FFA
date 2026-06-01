import { Sparkles, MessageSquareQuote as TestimonyIcon, Tag as PriceIcon } from "lucide-react"
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
            
            <ul className="flex items-center justify-end gap-3 text-md font-semibold font-serif">
                <li className="bg-amber-500 rounded-md w-40 h-9 flex gap-2 items-center justify-center">
                    <TestimonyIcon/>
                    <Link to="/testimonials">
                     Testimonials</Link> 
                </li>
                <li className="bg-green-500 w-32 h-9 flex gap-2 items-center justify-center rounded-md">
                   <Sparkles/>
                   <Link to="/features">Features</Link>
                </li>
                <li className="bg-teal-600 w-32 h-9 flex gap-2 items-center justify-center rounded-md ">
                    <PriceIcon/>
                    <Link to="/pricing">Pricing</Link>
                </li>
            </ul>
        </div>
        
    
    )
    
}

export default Navbar;