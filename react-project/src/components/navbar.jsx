import { Link } from 'react-router-dom';
import {Navigation as NavIcon, Home as HomeIcon, Briefcase as ServiceIcon, Mail as ContactIcon, LogIn} from "lucide-react";
export const Navbar = () => {

    return(
        <nav className='bg-gray-600 h-14 px-5 flex justify-between items-center text-white font-sans'>
            <ul className='flex gap-3'>
                <li className='flex items-center'>
                    <NavIcon/>
                </li>
                <li 
                className="text-sm h-10 border flex justify-center items-center gap-2 rounded-md  w-24  bg-amber-700  cursor-pointer hover:bg-blue-600">
                    <Link to="/">Home</Link><HomeIcon/>
                </li>
                <li 
                className="text-sm h-10 border flex justify-center items-center gap-2 rounded-md  w-24  bg-amber-500  cursor-pointer hover:bg-blue-600">
                    <Link to="/contact">Contacts</Link><ContactIcon/>
                </li>
                <li 
                className="text-sm h-10 border flex justify-center items-center gap-2 rounded-md  w-24  bg-teal-600  cursor-pointer hover:bg-blue-600">
                    <Link to="/service">Services</Link><ServiceIcon/>
                </li>
                <li 
                className="text-sm h-10 border flex justify-center items-center gap-2 rounded-md  w-24  bg-cyan-700  cursor-pointer hover:bg-blue-600">
                    <Link to="/login">Login</Link><LogIn/>
                </li>
            </ul>
        </nav>
    )
}