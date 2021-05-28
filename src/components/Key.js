import React from "react";

const Key = ({value, action}) => {
    
    const handleClick = (e) => {
        action(e.target.innerText);
    }
    
    return (
        <div 
            className={`key ${value === "del" ? "del-key" : 
                value === "reset" ? "reset-key" : 
                value === "=" ? "eq-key" : ""}`}
            onClick={handleClick}
        >
            <div className="key-value">{value}</div>
        </div>
    )
}

export default Key;