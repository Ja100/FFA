import { Link } from 'react-router-dom';
export const Navbar = () => {
    return(
        <nav className='bg-gray-600 flex justify-between items-center text-white font-sans p-5'>
            <h1 id="ha">MyApp</h1>
            <ul className='flex gap-3 items-center'>
                <li className='text-sm'>
                    <Link to="/">Home</Link>
                </li>
                <li className='text-sm'>
                    <Link to="/contact">Contacts</Link>
                </li>
                <li className='text-sm'>
                    <Link to="/service">Service</Link>
                </li>
                <li>
                    <Link  to="/services">Services</Link>
                </li>
                <li className='text-sm  bg-blue-500 px-2 py-1 rounded-md'>
                    <Link to="/login">Login</Link>
                </li>
            </ul>
        </nav>
    )
}