import { useState } from "react";

function Contacts (){
    const [darkTheme, setDarkTheme] = useState(false)
    const toggleTheme = () => {
        setDarkTheme(!darkTheme);
    }
    return (
        <>
        <div className={`flex flex-col justify-center items-center my-56 p-3
            ${
                darkTheme ? `bg-gray-900` : `bg-white` 
            }`}>
            <h1 className={`flex items-center gap-2 font-medium text-3xl
                ${
                    darkTheme ? `text-white` : `text-gray-800`
                }`
            }>Contacts</h1>
            <button className="cursor-pointer rounded bg-blue-700 text-white w-24 p-1"
                onClick={toggleTheme}> {darkTheme ? `Light Theme` : `Dark Theme`}
            </button>
                
        
        </div>
        
        </>
    )
}
export default Contacts;