const operations = (firstOperand, secondOperand, operation) => {
  switch (operation) {
    case '+':
      return firstOperand + secondOperand;
    case '-':
      return firstOperand - secondOperand;
    case '*':
      return firstOperand * secondOperand;
    case '/':
      return secondOperand === 0
        ? 'Cannot divide by 0'
        : firstOperand / secondOperand;
    default:
      console.log('Wrong operator');
  }
};

const buttonsList = [
  { style: 'secondaryOperation', val: 'AC' },
  { style: 'secondaryOperation', val: 'C' },
  { style: 'secondaryOperation', val: '+/-' },
  { style: 'operationButton', val: '/' },
  { val: 7 },
  { val: 8 },
  { val: 9 },
  { style: 'operationButton', val: '*' },
  { val: 4 },
  { val: 5 },
  { val: 6 },
  { style: 'operationButton', val: '-' },
  { val: 1 },
  { val: 2 },
  { val: 3 },
  { style: 'operationButton', val: '+' },
  { val: '00' },
  { val: 0 },
  { val: '.' },
  { style: 'operationButton', val: '=' },
];

const isNumVal = (val) => /^\d+$/.test(val);

const changeDisplayScale = (val) => {
  if (val.toString().length >= 8) {
    document.getElementById('displayText').style.fontSize = '25px';
  }
};

function calculator(stateObj, buttonValue) {
  const { displayVal, firstOperand, isOperator, operator } = stateObj;

  if (isNumVal(buttonValue)) {
    if (displayVal === '0' && (buttonValue === '00' || buttonValue === '0')) {
      return {};
    }

    if (displayVal === '0') {
      stateObj.isOperator = true;
      return { displayVal: buttonValue };
    } else {
      stateObj.isOperator = true;
      return { displayVal: displayVal + buttonValue };
    }
  }

  if (isOperator && !firstOperand) {
    stateObj.firstOperand = displayVal;
    stateObj.operator = buttonValue;
    stateObj.displayVal = '0';
  }

  if (buttonValue === 'AC') {
    return {
      displayVal: '0',
      firstOperand: null,
      isSecondOperandNeed: false,
      operator: null,
    };
  }

  if (buttonValue === 'C') {
    return { displayVal: '0' };
  }

  if (buttonValue === '+/-') {
    return { displayVal: displayVal * -1 };
  }

  if (buttonValue === '.') {
    if (!displayVal.includes('.')) {
      return { displayVal: displayVal + '.' };
    } else return {};
  }

  if (buttonValue === '=') {
    const resultCalc = operations(+firstOperand, +displayVal, operator);
    return {
      operator: null,
      firstOperand: null,
      displayVal: resultCalc,
    };
  }

  changeDisplayScale(displayVal);
}


export { calculator, operations, buttonsList, isNumVal, changeDisplayScale };
