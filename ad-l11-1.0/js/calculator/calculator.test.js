const calculator = require('./calculator');

test('adds 1 + 2 to equal 3', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test('adds -4 + 8 to equal 4', () => {
  expect(calculator.add(-4, 8)).toBe(4);
});

test('subtract 5 - 4 to equal 1', () => {
  expect(calculator.subtract(5, 4)).toBe(1);
});

test('subtract -5 - -10 to equal 5', () => {
  expect(calculator.subtract(-5, -10)).toBe(5);
});

test('divide 10 / 2 to equal 5', () => {
  expect(calculator.divide(10,2)).toBe(5);
});

test('divide 25 / 5 to equal 5', () => {
  expect(calculator.divide(25,5)).toBe(5);
});

test('multiply 25 * 4 to equal 100', () => {
  expect(calculator.multiply(25,4)).toBe(100);
});

test('multiply 40 * 4 to equal 160', () => {
  expect(calculator.multiply(40,4)).toBe(160);
});

test('divide 50 / 0 to equal infinity', () => {
  expect(calculator.divide(50,0)).toBe("No se puede dividir entre 0")
})

