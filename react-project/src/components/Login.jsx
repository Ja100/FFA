import { useState } from "react";
import { Navigate } from "react-router-dom";
function LogIn(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [star, setStar] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const user = {
        username: "admin",
        password: "admin123"
    };
    function handleSubmit(e){
        e.preventDefault();
        if(username === user.username && password === user.password){
            console.log("Login successful");
            setIsLoggedIn(true);
        } else {
            console.log("Invalid username or password");
        }
    }
    if(isLoggedIn){
        return <Navigate to="/dashboard2" state={user}/>
    }
    return (
        <div className="bg-gray-600 text-white font-sans p-5 flex 
        flex-col items-center gap-5 justify-center h-screen">
            <div className="border border-gray-500 p-5 rounded-md w-full max-w-sm">
            <h2 className="text-3xl items-center flex justify-items-center">Login</h2>
            <form className="flex flex-col gap-3" onSubmit={handleSubmit} noValidate>
                <input 
                type="text" 
                placeholder="Username" 
                className="bg-gray-700 text-white placeholder:text-gray-400 
                border border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 p-5"
                value={username} 
                onChange={(e)=> setUsername(e.target.value)} 
                />
                <input 
                type="password" 
                placeholder="Password" 
                className="bg-gray-700 text-white placeholder:text-gray-400 
                border border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 p-5" 
                value={password}
                onChange={(e)=> setPassword(e.target.value)}
                />
                <div className="flex flex-row justify-between">
                    <input type="range"
                    className="w-full"
                 min={1} 
                 max={10}
                 value={star}
                 onChange={(e)=> setStar(e.target.value)}/>
                 <p>{star}</p>
                </div>
                <button 
                type="submit" 
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md"
                >
                    Login
                </button>
            </form>
            </div>
        </div>
    );
}
export default LogIn;