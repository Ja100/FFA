import { useState } from "react"
import { Navigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
function Login(){
    const user = {
        username: "Jallen",
        password: "Jallen100"
    };

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isLoggedin, setisLoggedin] = useState(false);

    if (isLoggedin) {
        return <Navigate to="/dashboard" replace={true} />;
    }

    function handleSubmit(e){
        e.preventDefault();
        if(username === user.username && password === user.password){
            console.log('SUCCESS');
            setisLoggedin(true);
            return;

        } else{
            console.log('Invalid username or password!');
            return;
        }
        
    }
    
    


    return(
    <>
    <div className="flex justify-center">
        <form action=""
            className=" flex flex-col gap-4 justify-center items-center my-50 w-100 border bg-blue-300 text-xl py-5 px-3">
            <h1>Login Form</h1>
            <input type="text" placeholder="Username"
            onChange={(e)=> setUsername(e.target.value)}
            value={username}
            
            className="border-2 rounded-md px-3 h-10 placeholder:text-white"/>
            <input type="password" placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            className="border-2 rounded-md px-3 h-10  placeholder:text-white"/>
            <button
            onClick={handleSubmit}
            className="border-2 rounded-md font-semibold w-30 bg-blue-50 h-10 cursor-pointer hover:bg-blue-600">
                Log in</button>
            <p>{username}</p>
            <p>{password}</p>
        </form>
    </div>
    </>
    )
}
export default Login;