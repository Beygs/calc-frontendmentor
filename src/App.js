import './styles/App.scss';
import ThemesToggle from "./components/ThemesToggle";
import Screen from "./components/Screen";
import Keypad from "./components/Keypad";
import React, {useState, useEffect} from "react";

function App() {
  const [result, setResult] = useState("0");
  const [memory, setMemory] = useState(0);
  const [operator, setOperator] = useState("");
  const [theme, setTheme] = useState("1");
  const [resultSize, setResultSize] = useState("1.5");

  useEffect(() => {
    if (localStorage.getItem("theme") === null) {
      localStorage.setItem("theme", JSON.stringify(""));
    } else {
      let localTheme = JSON.parse(localStorage.getItem("theme"));
      setTheme(localTheme);
    }
  }, []);

  useEffect(() => localStorage.setItem("theme", JSON.stringify(theme)), [theme]);

  useEffect(() => {
    const length = result.length;
    setResultSize(
      length > 17 ? "0.8" : 
      length > 14 ? "1" : 
      length > 12 ? "1.2" : 
      length > 11 ? "1.4" : "1.5"
    )
  }, [result]);
  
  return (
    <div className={`theme theme--theme${theme}`}>
      <div className="base">
        <div className="calc">
          <header>
            <h1 className="title">calc</h1>
            <ThemesToggle theme={theme} setTheme={setTheme} />
          </header>
          <Screen result={result} resultSize={resultSize} />
          <Keypad
             result={result}
             setResult={setResult}
             memory={memory}
             setMemory={setMemory}
             operator={operator}
             setOperator={setOperator}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
