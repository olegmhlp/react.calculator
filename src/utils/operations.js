export const operations = (firstOperand, secondOperand, operation) => {
  switch (operation) {
    case "+":
      return firstOperand + secondOperand;
    case "-":
      return firstOperand - secondOperand;
    case "*":
      return firstOperand * secondOperand;
    case "/":
      return secondOperand === 0
        ? "Cannot divide by 0"
        : firstOperand / secondOperand;
    default:
      console.log("Wrong operator");
  }
};
