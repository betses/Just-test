const Calculator = require('./calculator.js')


const calculator = new Calculator();

describe('my Calculator', () => {

test('Calculator add', () => {
  expect(calculator.add(12,3)).toBe(15);
});

test('Calculator sub', () => {
  expect(calculator.sub(12,3)).toBe(9);
});
test('Calculator div', () => {
  expect(calculator.div(12,3)).toBe(4);
});
test('Calculator mul', () => {
  expect(calculator.mul(12,2)).toBe(24);
});

});