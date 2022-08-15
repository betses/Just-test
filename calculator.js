class Calculator  {

  add = (num1, num2) => {
    return num1 + num2;
  }
  sub = (num1, num2) => {
    return num1 - num2;
  }
  div = (num1, num2) => {
    return num1 / num2;
  }
  mul = (num1, num2) => {
    return num1 * num2;
  }
}

// const calculator = new Calculator();
// console.log(calculator.add(12,11))
// export default Calculator
module.exports = Calculator