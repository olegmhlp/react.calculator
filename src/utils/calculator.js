import { operations } from "./operations";

export default function calculator(stateObj, buttonValue) {
  const { displayVal, firstOperand, isOperator, operator } = stateObj;

  if (isNumVal(buttonValue)) {
    console.log("Number: " + buttonValue);

    if (displayVal === "0" && (buttonValue === "00" || buttonValue === "0")) {
      return {};
    }

    if (displayVal === "0") {
      stateObj.isOperator = true;
      return { displayVal: buttonValue };
    } else {
      stateObj.isOperator = true;
      return { displayVal: displayVal + buttonValue };
    }
  }

  if (isOperator) {
    console.log("Operator: " + buttonValue);
    if (!firstOperand) {
      stateObj.firstOperand = displayVal;
      stateObj.operator = buttonValue;
      stateObj.displayVal = "0";
    }
  }

  //---------------------------------------------------------

  if (buttonValue === "AC") {
    return {
      displayVal: "0",
      firstOperand: null,
      isSecondOperandNeed: false,
      operator: null
    };
  }

  if (buttonValue === "C") {
    return { displayVal: "0" };
  }

  if (buttonValue === "+/-") {
    return { displayVal: displayVal * -1 };
  }

  if (buttonValue === ".") {
    if (!displayVal.includes(".")) {
      return { displayVal: displayVal + "." };
    } else return {};
  }

  if (buttonValue === "=") {
    const resultCalc = operations(+firstOperand, +displayVal, operator);
    console.log(firstOperand + "\n" + displayVal + "\n" + operator);

    return {
      operator: null,
      firstOperand: null,
      displayVal: resultCalc
    };
  }

  changeDisplayScale(displayVal);
}

function isNumVal(val) {
  return /^\d+$/.test(val);
}

function changeDisplayScale(value) {
  if (value.toString().length >= 8) {
    document.getElementById("displayText").style.fontSize = "25px";
  }
}
