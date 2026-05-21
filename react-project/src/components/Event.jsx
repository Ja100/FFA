import { useState } from "react";

function EventSummary(){
    const [count, setCount] = useState(0);
    const [selectedId, setselectedId] = useState([]);
    const users = [
        {id: 1, name:"Chris"},
        {id: 2, name:"Max"},
        {id: 3, name:"Jason"}
    ]
    const products =[
        {id: 1, name:"Laptop"},
        {id: 2, name:"Phone"},
        {id: 3, name:"Tablet"}
    ]
    function handleSelect(id){
        setselectedId(id);
    }
    return(
    <>
    <div>
        <p className="font-bold m-7 bg-amber-600 ">{count}</p>
        <button onClick={() => setCount(count+1)} className="bg-gray-700 text-xl p-4 m-4">Add One</button>
    </div>

    <div>
        <h1 className="text-2xl font-bold m-7">Users</h1>
        <ul>
            {users.map(user => (
                <li key={user.id}>{user.name}</li>
            ))}
        </ul>
    </div>

    <div className="bg-gray-700">
        <h1 className="text-white text-2xl font-bold m-7"> Products </h1>
        <ul className="gap-4 p-2">
            {products.map(product => (
                <li key={product.id} className="text-white">
                    {product.name}
                    <button onClick={() => handleSelect(product.id)} className="bg-blue-700 w-15 mx-3 py-2 my-2 rounded">Select</button>
                </li>
            ))}
        </ul>
        {/* {selectedId.map((id)) (<p key={id}>Selected product ID: {selectedId}</p>)} */}
    </div>
    </>
    )
}

export default EventSummary;