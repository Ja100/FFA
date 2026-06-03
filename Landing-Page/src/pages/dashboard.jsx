import { Suspense} from "react";
import { useLocation } from "react-router-dom";

export default function Dashboard (props) {
    const location = useLocation();
    const username = location.state?.username || "Guest";

    return (<>
        <h1 className="p-4 font-semibold text-2xl"> Welcome, <span className="text-green-400">{username}</span></h1>
        <Suspense fallback={
            <div className="flex h-screen items-center justify-center">
                        <div className="text-4xl">Loading...</div>
            </div> 
        }>
            
                      
        </Suspense>

</>
    )
}