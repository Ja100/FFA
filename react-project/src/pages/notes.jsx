import { useState } from "react";


function Notes (){
    const [title, setTitle] = useState("");
    const [tasks, setTasks] = useState ([
        {id:1, title: "Shopping"},
        {id:2, title: "Group Call"},
        {id:3, title: "Cleaning"},
        {id:4, title: "Drafting"},
    ]);
    const [count, setCount] = useState(5);

    function newTask(e){
        e.preventDefault();
        if(title === '') return alert('Fill the field');

        //New Task Object
        const newId = tasks.length > 0 ? 
        Math.max(...tasks.map(task => task.id)) + 1 : 1; 
        const newTask = {
            id: newId,
            title: title
        };

        setTasks([...tasks, newTask]);
        
    }
    return (
        <>
        <div className="bg-amber-800 my-20">
            <div>
                <h1 className=" text-2xl font-bold m-7"> TO-DO App </h1>

                <div>
                    <form action=""
                    className=" flex flex-col gap-4 justify-center items-center w-100 border-2 rounded-xl bg-cyan-800 text-xl py-5 px-3"
                    >
                        <h1 className=" text-2xl font-bold" >Add new Task</h1>
                        {/* <input type="text" placeholder="ID of task..."
                        className="border-2 rounded-md px-3 h-10 placeholder:text-white"
                        /> */}

                        <input type="text" placeholder="Name of task..."
                        onChange={(e)=> setTitle(e.target.value)} value={title}
                        className="border-2 rounded-md px-3 h-10 placeholder:text-white"
                        />
                        <button
                        onClick={newTask}
                        className="border-2 rounded-md font-semibold w-30 bg-blue-50 h-10 cursor-pointer hover:bg-blue-600">
                        Create</button>
                        
                    </form>
                </div>

                <h1 className=" text-2xl font-bold p-2"> Tasks Number {tasks.length} </h1>
                    <ul 
                        className="gap-4 p-2 flex flex-col">
                        {tasks.map(task => (
                            <li key={task.id} className="text-white">
                                {task.id} {task.title}
                                
                            <button 
                            className="bg-amber-500 cursor-pointer w-15 mx-3 py-2 my-2 rounded"> Select      
                            </button>
                            </li>
                        ))}
                    </ul>
            </div>
        
        </div>
        </>
    )
}
export default Notes;