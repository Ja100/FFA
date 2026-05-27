import { Link } from 'react-router-dom';
import {Navigation as NavIcon, Menu, X, Home as HomeIcon, Briefcase as ServiceIcon, Mail as ContactIcon, NotepadText as Notepad, LogIn} from "lucide-react";
import { useState } from 'react';
export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    return(
        <nav className='bg-gray-600 h-14 flex justify-end items-center px-4 text-white font-sans'>
            <button className='flex justify-center items-center w-14 h-14 hover:cursor-pointer md:hidden rounded-full hover:bg-gray-500'
            onClick={toggleMenu}>
                {isOpen ? <X/> : <Menu/>} 
            </button>
            
            <ul className='hidden md:flex gap-3'> {/* Desktop Menu - Only visible to md screens */}
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
                className="text-sm h-10 border flex justify-center items-center gap-2 rounded-md  w-24  bg-green-600  cursor-pointer hover:bg-blue-600">
                    <Link to="/notes">To-Do</Link><Notepad/>
                </li>
                <li 
                className="text-sm h-10 border flex justify-center items-center gap-2 rounded-md  w-24  bg-cyan-700  cursor-pointer hover:bg-blue-600">
                    <Link to="/login">Login</Link><LogIn/>
                </li>
            </ul>
            
                {isOpen && (    
                <div className='absolute top-16 md:hidden sm:flex 
                flex flex-col items-center py-3 gap-3 rounded-md w-36 bg-emerald-700'>
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
                className="text-sm h-10 border flex justify-center items-center gap-2 rounded-md  w-24  bg-green-600  cursor-pointer hover:bg-blue-600">
                    <Link to="/notes">To-Do</Link><Notepad/>
                </li>
                <li 
                className="text-sm h-10 border flex justify-center items-center gap-2 rounded-md  w-24  bg-cyan-700  cursor-pointer hover:bg-blue-600">
                    <Link to="/login">Login</Link><LogIn/>
                </li>
                </div>
            )}
        </nav>
    )
}