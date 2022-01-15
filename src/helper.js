const operations = (first, second, operation) => ({
  '+': first + second,
  '-': first - second,
  '*': first * second,
  '/': second === 0 ? 'Cannot divide by 0' : first / second,
});

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

const buttons = [
  'display',
  'AC',
  'C',
  '+/-',
  '/',
  7,
  8,
  9,
  '*',
  4,
  5,
  6,
  '-',
  1,
  2,
  3,
  '+',
  '00',
  0,
  '.',
  '=',
];

const isNumVal = (value) => /^\d+$/.test(value);

const changeDisplayScale = (value) => {
  if (value.toString().length >= 8) {
    document.getElementsByTagName('div')[1].style.fontSize = '25px';
  }
};

const calc = (state, value) => {
  const { display, firstOperand, isOperator, operator } = state;

  if (isNumVal(value)) {
    if (display === '0' && (value === '00' || value === '0')) {
      return {};
    }

    if (display === '0') {
      return { isOperator: true, display: value };
    }
    changeDisplayScale(display);
    return { isOperator: true, display: display + value };
  }

  if (isOperator && !firstOperand) {
    return { firstOperand: display, operator: value, display: '0' };
  }

  return specialOperators(value, display, firstOperand, operator);
};

export { calc, buttons };
