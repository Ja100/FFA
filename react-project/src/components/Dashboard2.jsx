import { useLocation } from "react-router-dom";
function Dashboard2(){
    const location = useLocation();
    const user = location.state;
    return(
        <div className="bg-gray-600 text-white font-sans p-5 flex 
        flex-col items-center gap-5 justify-center h-screen">
            <h1 className="text-3xl">Welcome to the dashboard {user.username} !</h1>
        </div>
    )
}
export default Dashboard2;