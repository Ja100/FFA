import { useLocation } from "react-router-dom";
function Dashboard() {
    const location = useLocation();

    const user = location.state.user;
    return(
    <>
    <div className="bg-blue-100 text-xl flex flex-col gap-2">
        <div>
            <h1>Hello, <span className=" text-blue-600 font-medium "> {user.username}!</span></h1>
        </div>
        <div className="flex justify-center my-56">
            <p>Welcome to the DASHBOARD</p>
        </div>
        
    </div>
    </>)
} 
export default Dashboard;