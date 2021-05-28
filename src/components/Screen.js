import React from "react";

const Screen = ({ result, resultSize, memory, operator }) => {
    return (
        <div className="screen">
            <div className="inner-screen">
                <h3 
                    className="memory" 
                    style={{display: `${memory === 0 ? "none" : "block"}`}}>
                        {memory} {operator}
                </h3>
                <div className="outer-result">
                    <h2 
                        className="result" 
                        style={{fontSize: `${resultSize}em`}}>
                            {result}
                    </h2>
                </div>
            </div>
        </div>
    )
}

export default Screen;