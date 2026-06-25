import { Suspense, lazy, useState, useEffect } from "react";
import Portal from "../components/Portal";
    
export const Home = ()=>{

    const [count, setCount] = useState(() =>{
        const savedCount = localStorage.getItem('my_count');
        return savedCount ? JSON.parse(savedCount) : 0
    });
    const [users,setUsers] = useState([]);
    const [open, setOpen] = useState(false)

    function fetchUsers() {
        fetch("https://dummyjson.com/users")
        .then(res => res.json())
        .then(data => setUsers(data.users))
    }
    useEffect(() => {
        fetchUsers();   
        localStorage.setItem('my_count', JSON.stringify(count));
    }, [count])

    const [isOpen, setIsOpen] =useState(true)
    const Button = lazy(() => import("../components/Button"))
    // const Login  = lazy(()=> import("./login"));

    // const [text, setText] = useState("");
    // const [student, setStudent] = useState({
    //     username : '',
    //     password : ''
    // });
    // const [choice, setChoice] = useState(0);
    // const [gender, setGender] = useState("")
    // const [selectedColors, setSelectedColors ] = useState([]);
    // const handleText = (e) => {
    //     setText(e.target.value)
    // }
    
    // const handleCheckBox = (e) => {
    //     const {value, checked} = e.target;
    //     if(checked){
    //         setSelectedColors([...selectedColors, value])
    //     } else{
    //         setSelectedColors(selectedColors.filter((color) => color !==value));
    //     }
    // }
    // const handleChange = (e) => {
    //     const {name, value} = e.target;
    //     setStudent((prev) => ({
    //         ...prev,
    //         [name] : value
    //     }))
    // }

    return (
        <>

         <div className="flex flex-col items-center justify-center">
            
            <h1 className=" text-2xl gap-2 font-medium text-gray-800">HOME </h1>
            <button className="rounded-md bg-blue-500 border" 
            onClick={() => setOpen(!open)}>
                {open ? "Hide Users" : "Fetch Users"}
            </button>
            {open && (
                <ul>
                {users.map(user => (
                    <li key={user.id}>
                        {user.lastName} {user.firstName}</li>
                ))}
            </ul>
            )}
            <h1>Count : {count}</h1>
            <button onClick={() => setCount(count + 1)}> Increment</button>
            {/* <div>
                <h1>React Portal Test</h1>
                <button className="border rounded-full bg-blue-500 w-28 cursor-pointer hover:bg-red-300 hover:text-gray-700" 
                onClick={() => setIsOpen(false)}>Open Portal</button>
                <Portal isOpen={isOpen} onClose={() => setIsOpen(true)}>
                    <h1>This is a Portal..!</h1>
                </Portal>
                
            </div> */}
            {/* <div>
                <Suspense fallback={
                    <div className="flex h-screen items-center justify-center">
                        <div className="text-4xl">Loading...</div>
                    </div>
                }>
                <Button/>
                <Login/>
                </Suspense>
            </div> */}
            
        </div>

            {/* <form action="">
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
                value="Blue"
                checked={selectedColors.includes('Blue')}
                onChange={handleCheckBox}
                /> 
                Green <input type="checkbox" 
                value="Green"
                checked={selectedColors.includes('Green')}
                onChange={handleCheckBox}
                />
                <p>Color <strong>{selectedColors.join(', ') || 'NONE'}</strong> has been checked</p> <br/>
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
            </form>*/} 
        
            
        
        </>
        

    )
}