import { useState } from "react";
    
export const Home = ()=>{

    const [text, setText] = useState("");
    const [student, setStudent] = useState({
        username : '',
        password : ''
    });
    const [choice, setChoice] = useState("0");
    const [gender, setGender] = useState("")
    const [isChecked, setIsChecked] = useState("");
    const handleText = (e) => {
        setText(e.target.value)
    }
    const handleChange = (e) => {
        const {name, value} = e.target;
        setStudent((prev) => ({
            ...prev,
            [name] : value
        }))
    }

    return (
        <>
        <div className="flex flex-col gap-10 justify-center items-center">
            <h1 className="flex items-center text-2xl gap-2 font-medium text-gray-800">HOME </h1>

            <form action="">
                <label>Comments</label>
                <textarea className="border-2" value={text} onChange={handleText}></textarea>
                <p>Typed: {text}</p> <br/>
                <select value={choice} onChange={(e)=> setChoice(e.target.value)} className="border w-auto ">
                    
                    <option value="1">1</option>
                    <option value="2" >2</option>
                    <option value="3" >3</option>
                    
                </select>
                <p>You Chose {choice}</p> <br/>

                <input type="text" placeholder={"Username..."} 
                className="border p-1"
                name='username'
                value={student.username}
                onChange={handleChange}/> 
                <p>Username : {student.username}</p><br/>
                <input type="password" placeholder="Password..."
                name='password'
                value={student.password}
                onChange={handleChange} 
                className="border p-1"/>                
                <p>Password : {student.password}</p> <br/>
                Blue <input type="checkbox" 
                
                value="Blue" onChange={(e)=> setIsChecked(e.target.value)}
                /> 
                Green <input type="checkbox" 
                value="Green"
                onChange={(e)=> setIsChecked(e.target.value)}
                />
                <p>Color {isChecked} has been checked</p> <br/>
                Male <input type="radio" name="gender"
                value="Male"
                checked={gender === "Male"}
                onChange={(e)=> setGender(e.target.value)}
                />
                Female <input type="radio" name="gender"
                value="Female"
                checked={gender === "Female"}
                onChange={(e)=> setGender(e.target.value)}/>
                <p>Gender checked : {gender}</p>
            </form>
        </div>
        
            
        
        </>
        

    )
}