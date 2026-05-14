import { Languages ,ChevronRight} from "lucide-react";
function Home(){
    return(
        <>
                <nav className="bg-transparent text-red-800 text-4xl flex justify-between px-15 py-5 items-center">
            <h1 className="font-extrabold">NETFLIX</h1>
            <ul className="flex items-center gap-3">
                <li className="flex items-center gap-2">
                    <Languages className="text-white"/>
                    <select className="text-white border px-6">
                        <option> <Languages/>English</option>
                        <option>Francais</option>
                    </select>
                </li>
                <li>
                    <button className="bg-red-700 text-white p-2 text-lg rounded-md">Sign In</button>
                </li>
            </ul>
        </nav>
        <div className="text-white flex justify-center items-center h-screen flex-col pb-10">
            <h1 className="text-6xl font-extrabold m-2">Unlimited movies, TV <br/></h1>
            <h1 className="text-6xl font-extrabold mb-4">shows, and more</h1>
            <h2 className="text-2xl font-bold">Starts at $15.98. Cancel at any time.</h2>
            <p className="font-medium m-2">Ready to watch? Enter your email to create or restart your membership.</p>
            <div className="flex gap-2">
                <input type="email" placeholder="Email address" className="p-4 border w-120"/>
            <button className="bg-red-700 flex items-center text-2xl p-2 rounded-md font-extrabold">Get Started <ChevronRight/> </button>
            </div>
        </div>
        </>
    )
}
export default Home;