const operations = (first, second, operation) => {
  switch (operation) {
    case '+':
      return first + second;
    case '-':
      return first - second;
    case '*':
      return first * second;
    case '/':
      return second === 0 ? 'Cannot divide by 0' : first / second;
    default:
      console.log('Wrong operator');
  }
};

const specialOperators = (button, display, firstOperand, operator) => {
  switch (button) {
    case 'AC':
      return {
        display: '0',
        firstOperand: null,
        operator: null,
      };
    case 'C':
      return { display: '0' };
    case '+/-':
      return { display: display * -1 };
    case '.':
      return !display.includes('.') ? { display: display + '.' } : {};
    case '=':
      return {
        operator: null,
        firstOperand: null,
        display: operations(Number(firstOperand), Number(display), operator),
      };
    default:
  }
};

const buttons = [ 'AC', 'C', '+/-', '/', 7, 8, 9, '*', 4, 5, 6, '-', 1, 2, 3, '+', '00', 0, '.', '='];

const isNumVal = (value) => /^\d+$/.test(value);

const changeDisplayScale = (value) => {
  if (value.toString().length >= 8) {
    document.getElementsByTagName('div')[1].style.fontSize = '25px';
  }
};

const calculator = (state, button) => {
  const { display, firstOperand, isOperator, operator } = state;

  if (isNumVal(button)) {
    if (display === '0' && (button === '00' || button === '0')) {
      return {};
    }

    if (display === '0') {
      return { isOperator: true, display: button };
    }
    changeDisplayScale(display);
    return { isOperator: true, display: display + button };
  }

  if (isOperator && !firstOperand) {
    return { firstOperand: display, operator: button, display: '0' };
  }

  return specialOperators(button, display, firstOperand, operator);
};

export { calculator, buttons };
