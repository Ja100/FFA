import {Languages} from 'lucide-react'
function Home () {
    return (
        <nav className='flex justify-between px-25 py-5' >
            <h1 className="text-7xl  text-red-500">NETFLIX</h1>
            <ul className="flex justify-items-center text-white">
                <div className='text-md font-medium flex justify-center border border-white/30 rounded-md w-36 h-10 py-2 mx-3'>
                    <li>
                    <Languages/>
                    </li>
                    <li>
                    <select>
                        <option value="" className='text-black'>English</option>
                        <option value="" className='text-black'>Francais</option>
                    </select>
                </li>
                </div>
                <li>
                    <button type="submit" className='bg-red-600 hover:bg-red-700 cursor-pointer w-24 h-10 px-3 rounded-md font-medium'>Sign in</button>
                </li>
            </ul>
        </nav>
    )
}
export default Home;