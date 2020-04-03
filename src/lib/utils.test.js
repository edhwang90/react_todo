import { partial, pipe } from './utils';

const add = (a, b) => a + b;
const addMultiple = (...args) => args.reduce(add, 0);
const ini = (num) => num + 1;
const dbl = (num) => num + 2;

test('partial applies the first argument ahead of time', () => {
  const ini = partial(add, 1);
  const result = ini(2);

  expect(result).toBe(3);
});

test('partial applies multiple arguments ahead of time', () => {
  const ini = partial(addMultiple, 1);
  const result = ini(2, 3);

  expect(result).toBe(6);
});

test('pipe passes the results of ini to dbl', () => {
  const pipeline = pipe(ini, dbl);
  const result = pipeline(2);

  expect(result).toBe(5);
});

test('pipe passes the results of dbl in ini', () => {
  const pipeline = pipe(dbl, ini);
  const result = pipeline(2);

  expect(result).toBe(5);
});

test('pipe works with more than 2 functions', () => {
  const pipeline = pipe(add, ini, dbl, ini);
  const result = pipeline(1, 2);

  expect(result).toBe(7);
});