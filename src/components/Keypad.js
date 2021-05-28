import React, { useEffect } from "react";
import Key from "./Key";

const Keypad = ({ result, setResult, memory, setMemory, operator, setOperator }) => {
    useEffect(() => {
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    });

    const handleKeyDown = (e) => {
        e.preventDefault();
        const current = e.key;
        const values = [
            "0", 
            "1", 
            "2", 
            "3", 
            "4", 
            "5", 
            "6", 
            "7", 
            "8", 
            "9", 
        ]
        const operators = [
            "+",
            "-",
            "*",
            "/",
            "=",
        ]
        if (values.includes(current)) {
            handleNumber(current);
        } else if (operators.includes(current)) {
            handleCalc(current !== "*" ? current : "x");
        } else if (current === ".") {
            handleDot();
        } else if (current === "Backspace") {
            handleDel();
        } else if (current.toLowerCase() === "r") {
            handleReset();
        }
    }
    
    const handleNumber = (num) => {
        const num1 = result;
        const op = operator;

        if (op === "=") {
            setResult(num);
            setOperator("");
        } else if (op === "0"){
            setResult(num);
            setOperator("");
            setMemory(0);
        } else {
            setResult(num1 === "0" ? num : `${num1}${num}`);
        }
    }

    const handleCalc = (op) => {
        const num = Number(result);
        const num2 = memory;
        const calc = operator;
        let res;

        if (calc === "/" && num === 0) {
            setResult("OH SHI💥💥💥💥");
            setOperator("0");
            setMemory("You divided by ");
        } else {    
            setOperator(op);

            switch(calc) {
                case "+":
                    res = num2 + num;
                    break;
                case "-":
                    res = num2 - num;
                    break;
                case "x":
                    res = num2 * num;
                    break;
                case "/":
                    res = num2 / num;
                    break;
                default:
                    res = num;
                    break;
            }
            if (op === "=") {
                setResult(res.toString());
                setMemory(0);
            } else {
                setResult("0");
                setMemory(res);
            }
        }
    }

    const handleDot = () => {
        const num = result;
        setResult(num.includes(".") ? num : `${num}.`);
    }

    const handleDel = () => {
        const num = result;
        const del = num.slice(0, num.length - 1);
        if (del.length === 0) {
            setResult("0");
        } else {
            setResult(del);
        }
    }

    const handleReset = () => {
        setResult("0");
        setMemory(0);
        setOperator("");
    }
    
    return (
        <div className="keypad">
            <div className="row">
                <Key value="7" action={handleNumber} />
                <Key value="8" action={handleNumber} />
                <Key value="9" action={handleNumber} />
                <Key value="del" action={handleDel} />
            </div>
            <div className="row">
                <Key value="4" action={handleNumber} />
                <Key value="5" action={handleNumber} />
                <Key value="6" action={handleNumber} />
                <Key value="+" action={handleCalc} />
            </div>
            <div className="row">
                <Key value="1" action={handleNumber} />
                <Key value="2" action={handleNumber} />
                <Key value="3" action={handleNumber} />
                <Key value="-" action={handleCalc} />
            </div>
            <div className="row">
                <Key value="." action={handleDot} />
                <Key value="0" action={handleNumber} />
                <Key value="/" action={handleCalc} />
                <Key value="x" action={handleCalc} />
            </div>
            <div className="row">
                <Key value="reset" action={handleReset} />
                <Key value="=" action={handleCalc} />
            </div>
        </div>
    )
}

export default Keypad;