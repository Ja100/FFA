import { use } from 'react';
import { Link } from 'react-router-dom';
export const Navbar = () => {
    const user = {name: "mugisha ", password: "49358439yhie"}
    document.getElementById("ha").innerHTML = user.name;

    return(
        <nav className='bg-gray-600 flex justify-between items-center text-white font-sans'>
            <h1 id="ha">{user.name}</h1>
            <ul className='flex gap-3'>
                <li className='text-sm'>
                    <Link to="/">Home</Link>
                </li>
                <li className='text-sm'>
                    <Link to="/contact">Contacts</Link>
                </li>
                <li className='text-sm'>
                    <Link to="/service">Services</Link>
                </li>
            </ul>
        </nav>
    )
}