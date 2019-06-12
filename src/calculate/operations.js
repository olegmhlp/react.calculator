export default function operations(firstOperand, secondOperand, operation) {
    switch (operation) {
        case '+':
            return firstOperand + secondOperand;
        case '-':
            return firstOperand - secondOperand;
        case '*':
            return firstOperand * secondOperand;
        case '/':
            if (secondOperand === 0) {
                return 'Cannot divide by 0';
            } else return firstOperand / secondOperand;
        default:
            console.log('Wrong operator');
    }
}
