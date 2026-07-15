import axios from "axios"; // FECTH can also work but thats easier
import { useContext, useState } from "react";
import {toast} from 'react-hot-toast';
import { useNavigate} from 'react-router-dom'
import { UserContext } from "../../context/userContext";

function Login (){
    const navigate = useNavigate();
    const { setUser } = useContext(UserContext)
    const [data, setData] = useState({
        email: '',
        password: '',
    })

    const loginUser = async (e) => {
        e.preventDefault();
        const {email, password} = data; 
        try {
            const {data} = await axios.post('/login', {
                email,
                password
            });
            if(data.error) { 
                toast.error(data.error)
            } else {
                setUser(data) // this is for global state so Dashboard reads user info
                setData({ email: '', password: ''});
                toast.success('Logged in Successfully')
                navigate('/dashboard');
            }
            
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <div className="flex justify-center h-full">
            <form onSubmit={loginUser}
            className="mt-40 bg-blue-700/60 flex flex-col justify-center items-center gap-y-4 
            space-y-5 rounded-4xl h-96 w-80">
                <label className="text-slate-100 text-center font-medium text-2xl"> User Login </label>
                <input 
                className="border-2 border-slate-200 p-2.5 pl-3.5 text-slate-900 rounded-md focus:outline-none placeholder:text-slate-200 placeholder:text-center"
                value={data.email || ''} onChange={(e) => setData({...data, email: e.target.value})}
                type="email" placeholder="EMAIL"/>
                
                <input 
                className="border-2 border-slate-200 p-2.5 pl-3.5 text-slate-900 rounded-md focus:outline-none placeholder:text-slate-200 placeholder:text-center"
                value={data.password || ''} onChange={(e) => setData({...data, password: e.target.value})}
                type="password" placeholder="PASSWORD"/>

                <button className="bg-indigo-800 w-56 p-2.5 text-slate-200 text-xl font-bold cursor-pointer rounded-xl hover:bg-indigo-900"
                type="submit">LOGIN</button>
            </form>
        </div>


    )
}

export default Login;