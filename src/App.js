import React, { useState } from "react";
import "./App.css";
import { Display, ButtonsPanel } from "./components";
import calculator from "./utils/calculator";

const App = () => {
  const [calcState, setCalcState] = useState({
    displayVal: "0",
    firstOperand: null,
    isOperator: false,
    operator: null
  });

  const handleClick = event => {
    let calcResult = calculator(calcState, event.target.value);
    setCalcState({ ...calcState, ...calcResult });
  };

  return (
    <div className="calculator">
      <Display current={calcState.displayVal} />
      <ButtonsPanel onClick={handleClick} />
    </div>
  );
};

export default App;
