import { useState } from "react"
function Login(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    function handleSubmit(e){
        e.preventDefault();
    }
    function validation() {
        if(username.length < 5 || !username.includes('@')) {
            console.log('username must be 5 characters long containing @'); 
            return;  
        }
        const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d).+$/;
        if(!passwordRegex.test(password) || password.length < 8){
            console.log('password must be 8 characters long containing both numbers and letters');
            return;
            
        }  
         
        console.log('Validation Passed..!');
        
    }


    return(
    <>
    <div className="flex justify-center">
        <form action="" onClick={handleSubmit} 
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
            onClick={validation}
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