import React, { Component } from "react";
import Key from "./Key";

class Keypad extends Component {

    componentDidMount() {
        document.addEventListener("keydown", this.handleKeyDown);
    }
  
    componentWillUnmount() {
        document.removeEventListener("keydown", this.handleKeyDown);
    }

    handleKeyDown = (e) => {
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
            this.handleNumber(current);
        } else if (operators.includes(current)) {
            this.handleCalc(current !== "*" ? current : "x");
        } else if (current === ".") {
            this.handleDot();
        } else if (current === "Backspace") {
            this.handleDel();
        } else if (current.toLowerCase() === "r") {
            this.handleReset();
        }
    }
    
    handleNumber = (num) => {
        const num1 = this.props.result;
        const op = this.props.operator;

        if (op === "=") {
            this.props.setResult(num);
            this.props.setOperator("");
        } else {
            this.props.setResult(num1 === "0" ? num : `${num1}${num}`);
        }
    }

    handleCalc = (op) => {
        const num = Number(this.props.result);
        const num2 = this.props.memory;
        const calc = this.props.operator;
        let res;
        
        this.props.setOperator(op);

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
            this.props.setResult(res.toString());
            this.props.setMemory(0);
        } else {
            this.props.setResult("0");
            this.props.setMemory(res);
        }
    }

    handleDot = () => {
        const num = this.props.result;
        this.props.setResult(num.includes(".") ? num : `${num}.`);
    }

    handleDel = () => {
        const num = this.props.result;
        const del = num.slice(0, num.length - 1);
        if (del.length === 0) {
            this.props.setResult("0");
        } else {
            this.props.setResult(del);
        }
    }

    handleReset = () => {
        this.props.setResult("0");
        this.props.setMemory(0);
        this.props.setOperator("");
    }
    
    render () {
        return (
            <div className="keypad">
                <div className="row">
                    <Key value="7" action={this.handleNumber} />
                    <Key value="8" action={this.handleNumber} />
                    <Key value="9" action={this.handleNumber} />
                    <Key value="del" action={this.handleDel} />
                </div>
                <div className="row">
                    <Key value="4" action={this.handleNumber} />
                    <Key value="5" action={this.handleNumber} />
                    <Key value="6" action={this.handleNumber} />
                    <Key value="+" action={this.handleCalc} />
                </div>
                <div className="row">
                    <Key value="1" action={this.handleNumber} />
                    <Key value="2" action={this.handleNumber} />
                    <Key value="3" action={this.handleNumber} />
                    <Key value="-" action={this.handleCalc} />
                </div>
                <div className="row">
                    <Key value="." action={this.handleDot} />
                    <Key value="0" action={this.handleNumber} />
                    <Key value="/" action={this.handleCalc} />
                    <Key value="x" action={this.handleCalc} />
                </div>
                <div className="row">
                    <Key value="reset" action={this.handleReset} />
                    <Key value="=" action={this.handleCalc} />
                </div>
            </div>
        )
    }
}

export default Keypad;