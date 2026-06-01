import { useState } from "react"
import { Navigate } from "react-router-dom";
export default function Login () {
    const user = {
        username:   'Jallen',
        email: 'Jallen@mail.com',
        password: 'Jallen100'
    };

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLogged, setIsLogged] = useState(false);
    if(isLogged){
        return <Navigate to="/dashboard"/>
    }

    function handleSubmit(e){
        e.preventDefault();
        if(email === user.email && password === user.password){
            setIsLogged(true);
            return;
        } 
        if(email === '' || password === ''){
            alert('Fill the fields')
        } else{
            alert('Incorrect username or password..!')
        }
    }

    return (
        <div className="flex flex-col items-center">
            <form action="" onSubmit={handleSubmit}
            className="bg-mauve-400 border rounded-2xl h-96 w-96 my-28 flex gap-4 flex-col items-center justify-center">
                <label className="py-4 text-white font-semibold  text-3xl"> Login Page </label>
                <input type="email" placeholder="Email..."
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className="border rounded-sm h-11 w-3xs font-normal font-serif text-xl px-2
                hover:border-2 hover:border-amber-300"
                />
                <input type="password" placeholder="Password..." 
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                className="border rounded-sm h-11 w-3xs font-normal font-serif text-xl px-2 
                hover:border-2 hover:border-amber-300"
                />
                <button type="submit"
                className="border bg-blue-600 rounded-sm h-11 w-3xs text-white font-normal font-serif text-xl
                hover:cursor-pointer hover:bg-sky-800"
                >Login</button>
                <a href="/register" className="underline">Register</a>
            </form>
        </div>

    )
}