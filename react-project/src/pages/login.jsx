import { useState } from "react"
function Login(){
    const [username, setUsername] = useState("");
    const [passwword, setPassword] = useState("");
    return(
    <>
    <div>
        <div className="border border-gray"></div>
        <input type="text" name="" id="" placeholder="Username"/>
        <input type="password" name="" id="" placeholder="Password"/>
        <h1>Login Form</h1>
    </div>
    </>
    )
}
export default Login;