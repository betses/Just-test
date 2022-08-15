
const functions = require('./index')



test('characterLength function exists', () => {
  expect(functions.getCharacterLength).toBeDefined();
});

test('characterLength less than 10', () => {
  expect(functions.getCharacterLength('dasdf')).toBeLessThan(10);
});

test('characterLength less than 10', () => {
  expect(functions.getCharacterLength('dsasd')).toBeGreaterThan(1);
});

test('reverseString', () => {
  expect(functions.reverseString('asdf')).toEqual('fdsa');
});

test('Capitalize', () => {
  expect(functions.capitalize('fsda')).toEqual('Fsda');
});