import { createPortal } from "react-dom";

function Portal ({isOpen, onClose, children}){
    if (!isOpen) return null;
    return(
        createPortal(
            <div 
            className="fixed bg-black/50 border inset-0 flex items-center justify-center">
                
                <div 
                className="bg-gray-100 rounded-2xl border w-xs h-40 flex flex-col gap-4 items-center justify-center">
                    {children}
                    <button 
                    className=" font-medium text-green-500 text-xl w-20 
                    hover:cursor-pointer hover:bg-gray-200"
                    onClick={onClose}>CLOSE</button>
                </div>
            </div> 
            , document.body
        )
    )
}

export default Portal