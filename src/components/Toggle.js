import React from "react";

const Toggle = ({theme, setTheme}) => {
    const handleClick = (e) => {
        setTheme(e.target.value);
    }
    
    return (
        <div className="theme-switch">
            <div className="theme-switch-buttons">
                <button className="switch1" value="1" onClick={handleClick}></button>
                <button className="switch2" value="2" onClick={handleClick}></button>
                <button className="switch3" value="3" onClick={handleClick}></button>
            </div>
            <div className={`round select-theme${theme}`}></div>
        </div>
    )
}

export default Toggle;