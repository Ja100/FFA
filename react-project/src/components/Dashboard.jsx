import { useLocation } from "react-router-dom";
import Manage from "../components/useCard.jsx";
function Dashboard() {
    const location = useLocation();
    const user = location.state;
    return (
        <div className="bg-gray-600 text-white font-sans p-5 flex 
        flex-col items-center gap-5 justify-center h-screen">
            <h1 className="text-3xl font-bold">Welcome to the Dashboard! </h1>
            <p>This is a protected route. Only logged-in users can see this.</p>
            <Manage name="John Doe" role="Developer" avatar="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"/>
            {user && (
                <div>
                    <h2 className="text-2xl font-bold">User Information:</h2>
                    <p>Username: {user.username}</p>
                </div>
            )}
        </div>
    );
}
export default Dashboard;