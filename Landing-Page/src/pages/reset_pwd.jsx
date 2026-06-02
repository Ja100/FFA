import { useState } from "react"
import { Mail } from "lucide-react";
export default function ResetPassword (props) {
    
    function handleSubmit(e){
        e.preventDefault();
        if(props.email === mail){
            alert('Email Found.!');
            return;
        } else if(mail.trim() === ''){
            alert('Enter Email..!');
            return;
        } else{
            alert('Email Not Found')
        }
    }

    const [mail, setMail] = useState('');

    return (
        <div className="flex flex-col items-center">
            <form action="" onSubmit={handleSubmit}
            className="bg-mauve-400 border rounded-2xl h-96 w-96 my-28 flex gap-4 flex-col items-center justify-center">
                <label className="py-4 text-white font-semibold  text-3xl"> Reset Page </label>
                <div className="flex items-center">
                    <Mail className="absolute mx-2 w-5 h-5"/>
                    <input type="email" placeholder="Email..."
                    value={mail}
                    onChange={(e) => setMail(e.target.value)}
                className="border rounded-lg h-11 w-full font-normal font-serif text-xl pl-10 pr-10
                hover:border-2 hover:border-amber-300"
                />
                </div>
                <button type="submit"
                className="border bg-blue-600 rounded-lg h-11 w-3xs text-white font-normal font-serif text-xl
                hover:cursor-pointer hover:bg-sky-800"
                >RESET</button>
            </form>
        </div>

    )
}