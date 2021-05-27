import React from "react";
import Toggle from "./Toggle";

const ThemesToggle = ({theme, setTheme}) => {
    return(
        <div className="themes-toggle-component">
            <h3 className="theme-title">theme</h3>
            <div className="themes-toggle">
                <div className="toggle-numbers">
                    <h3 className="toggle1">1</h3>
                    <h3 className="toggle2">2</h3>
                    <h3 className="toggle3">3</h3>
                </div>
                <Toggle theme={theme} setTheme={setTheme} />
            </div>
        </div>
    )
}

export default ThemesToggle;