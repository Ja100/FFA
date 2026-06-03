import { useState } from "react"
import { Navigate } from "react-router-dom";
import { Mail, Lock, UserRound as User, ShieldCheck as Password } from "lucide-react";
export default function Register () {
    const [newUser, setNewUser] = useState({
        name:   '',
        email: '',
        password: '',
        confPass: '',
    });

    const [isSigned, setIsSigned] = useState(false);
    if(isSigned){
        return <Navigate to="/login"/>
    }

    const handleChange = (e) => {
        const {name, value} = e.target;
        setNewUser((prev) => ({
            ...prev,[name]:value
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(newUser.password !== newUser.confPass){
            alert('password not matched!')
            return;
        }else if (newUser.name === '' || newUser.password === '' || newUser.email === ''){
            alert('Fill the Fields');
            return;
        } else{
            setIsSigned(true);
            return;
        }
    }

    return (
        <div className="flex flex-col items-center">
            <form action="" onSubmit={handleSubmit}
            className="bg-gray-500 border rounded-2xl h-120 w-96 my-14 flex gap-4 flex-col items-center justify-center">
                <label className="py-4 text-white font-semibold  text-3xl"> Sign UP </label>
                <div className="relative flex items-center">
                    <User className="absolute mx-2 w-5 h-5"/>
                    <input type="text" placeholder="Full Name..."
                onChange={handleChange}
                name="name"
                value={newUser.name}
                className="border rounded-lg h-11 w-full font-normal font-serif text-xl pl-10 pr-10
                hover:border-2 hover:border-amber-300"
                />
                </div>
                <div className="flex items-center">
                    <Mail className="absolute mx-2 w-5 h-5"/>
                    <input type="email" placeholder="Email..."
                onChange={handleChange}
                name="email"
                value={newUser.email}
                className="border rounded-lg h-11 w-full font-normal font-serif text-xl pl-10 pr-10
                hover:border-2 hover:border-amber-300"
                />
                </div>

                <div className="flex items-center">
                    <Lock className="absolute mx-2 w-5 h-5 "/>
                    <input type="password" placeholder="Password..."
                onChange={handleChange}
                name="password"
                value={newUser.password}
                className="border  rounded-lg h-11 w-full font-normal font-serif text-xl pl-10 pr-10
                hover:border-2 hover:border-amber-300"
                />
                </div>

                <div className="flex items-center">
                    <Password className="absolute mx-2 w-5 h-5 "/>
                    <input type="password" placeholder="Confirm Password..."
                onChange={handleChange}
                name="confPass"
                value={newUser.confPass}
                className="border  rounded-lg h-11 w-full font-normal font-serif text-xl pl-10 pr-10
                hover:border-2 hover:border-amber-300"
                />
                </div>

                <button type="submit"
                className="border bg-orange-600 rounded-lg h-11 w-3xs text-white font-normal font-serif text-xl
                hover:cursor-pointer hover:bg-sky-800"
                >Register</button>
            </form>
        </div>

    )
}