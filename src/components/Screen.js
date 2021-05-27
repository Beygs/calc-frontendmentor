import React from "react";

const Screen = ({ result, resultSize }) => {
    return (
        <div className="screen">
            <div className="outer-result">
                <h2 className="result" style={{fontSize: `${resultSize}em`}}>{result}</h2>
            </div>
        </div>
    )
}

export default Screen;