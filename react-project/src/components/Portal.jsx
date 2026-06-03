import { createPortal } from "react-dom";

function Portal({isOpen, onClose, children}){
    if(isOpen) return null;
    return
        createPortal(
        <div className="portal">
            <div className="portal-content">
                {children}
                <button className="border rounded-full bg-transparent w-16 m-2 cursor-pointer text-gray-500 hover:bg-red-300 hover:text-gray-700"
                onClick={onClose}>Close</button>
            </div>
        </div>, 
        document.body
    )
}

export default Portal