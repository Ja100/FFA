import {Languages} from 'lucide-react'
function Home () {
    return (
        <nav className='flex justify-between px-25 py-5' >
            <h1 className="text-7xl text-red-600">NETFLIX</h1>
            <ul className="flex justify-items-center text-white">
                <li>
                <Languages/>
                    <select>
                        <option value="">English</option>
                        <option value="">Francais</option>
                    </select>
                </li>
                <li>
                    <button type="submit">Sign in</button>
                </li>
            </ul>
        </nav>
    )
}
export default Home;