import { Link } from "react-router-dom";
export const Navbar = () => {
    return (
        <nav className='bg-gray-600 flex justify-between items-center text-white font-sans h-16'>
            
            <h1>Future Focus </h1>
            <ul className='flex gap-3'>
                <li className='text-sm'>
                    <Link to="/">Home</Link>
                </li>

                <li className='text-sm'>
                    <Link to="/service">Services</Link>
                </li>
                
                <li className='text-sm'>
                    <Link to="/contact">Contacts</Link>
                </li>
            </ul>
        </nav>
    )
}