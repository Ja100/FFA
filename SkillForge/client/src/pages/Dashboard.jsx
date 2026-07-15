import { useContext } from "react";
import { UserContext } from "../../context/userContext"
import { Link, Navigate } from "react-router-dom";

export default function Dashboard(){
    const {user} = useContext(UserContext)
    return(
        <div className=" flex flex-col justify-center gap-y-5">
            <h1> Dashboard </h1>
            {!!user && (
                <h1>Welcome, <b>{user.name}!</b></h1>
            )}
            <Link to='/'
            className="bg-indigo-800 w-24 text-center p-1.5 text-slate-200 text-xl font-bold cursor-pointer rounded-xl hover:bg-indigo-900">
                Log Out</Link>
        </div>
    )
}