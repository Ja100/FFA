import { useLocation } from "react-router-dom";
import {LayoutDashboard as DashboardIcon} from "lucide-react"
function Dashboard() {
    const location = useLocation();

    const user = location.state.user;
    return(
    <>
    <div className="text-xl flex flex-col gap-2">
        <div>
            <h1>Hello, <span className=" text-blue-600 font-medium "> {user.username}!</span></h1>
        </div>
        <div className="flex justify-center items-center my-56">
            <p className="flex items-center gap-2 font-medium text-gray-800">Welcome to the DASHBOARD <DashboardIcon className="text-blue-500"/></p>
            
        </div>
        
    </div>
    </>)
} 
export default Dashboard;