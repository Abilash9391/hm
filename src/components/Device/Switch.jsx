import React, { useState } from "react";
import "../../styles/Switch.css";

const Switch = () => {
    const [isChecked, setIsChecked] = useState(false);

    const handleToggle = () => {
        setIsChecked(!isChecked);
    };

    return (
        <div className={`switch ${isChecked ? 'checked' : ''}`}>
            <input 
                type="checkbox" 
                id="switch" 
                checked={isChecked} 
                onChange={handleToggle} 
            />
            <div className="toggle-button"></div>
        </div>
    );
}

export default Switch;


// const Switch=()=>{
//     return(
//         <div className="switch">
//             <input type="checkbox" id="switch" />
//         </div>
//     );
// }

// export default Switch;