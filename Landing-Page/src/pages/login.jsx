import { useState} from "react"
import { Navigate } from "react-router-dom";
import { Mail, Lock } from "lucide-react";
import Portal from "../components/portal";

export default function Login () {
    const user = {
        username:   'Jallen',
        email: 'Jallen@mail.com',
        password: 'Jallen100'
    };

    const [isOpen, setIsOpen] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLogged, setIsLogged] = useState(false);
    // const [errors, setErrors] = useState({})
    if(isLogged){
        return <Navigate to="/dashboard" state={ {username: user.username}}/>
    }

   

    function handleSubmit(e){
        e.preventDefault();
        if(email === user.email && password === user.password){
            setIsOpen(true);
            return;
        } 
        if(email === '' || password === ''){
            // setErrors( { message: 'Fill the Fields'});
            alert('Fill the fields');
            return;
        } else{
            // setErrors( { message: 'Fill the Fields'});
            alert('Incorrect username or password..!');
            return;
        }
    }

    return (
        <div className="flex flex-col items-center">
            <form action="" onSubmit={handleSubmit}
            className="bg-mauve-400 border rounded-2xl h-96 w-96 my-28 flex gap-4 flex-col items-center justify-center">
                <label className="py-4 text-white font-semibold  text-3xl"> Login Page </label>
                <div className="flex items-center">
                    <Mail className="absolute mx-2 w-5 h-5"/>
                    <input type="email" placeholder="Email..."
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className="border rounded-lg h-11 w-full font-normal font-serif text-xl pl-10 pr-10
                hover:border-2 hover:border-amber-300"
                />
                </div>

                <div className="flex items-center">
                    <Lock className="absolute mx-2 w-5 h-5 "/>
                    <input type="password" placeholder="Password..."
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                className="border  rounded-lg h-11 w-full font-normal font-serif text-xl pl-10 pr-10
                hover:border-2 hover:border-amber-300"
                />
                </div>
                <button type="submit"
                className="border bg-blue-600 rounded-lg h-11 w-3xs text-white font-normal font-serif text-xl
                hover:cursor-pointer hover:bg-sky-800"
                >Login</button>
                {/* <p>{errors.message}</p> */}
                <a href="/register" className="underline">Register</a>
                <a href="/reset_pwd" className="underline">Forgot Password</a>

                    <Portal isOpen={isOpen} onClose={() => setIsLogged(true)} >
                        <p>Logged In Successfully</p>
                    </Portal>
                
                
            </form>
        </div>

    )
}