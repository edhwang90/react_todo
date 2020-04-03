import { addTodo, removeTodo } from './TodoHelpers';

test('addTodo should add the new todo to the list', () => {
  const defaultTodos = [
    { id: 1, name: 'one', isComplete: 'false' },
  ];

  const newTodo = { id: 2, name: 'two', isComplete: 'false' };

  const expected = [
    { id: 1, name: 'one', isComplete: 'false' },
    { id: 2, name: 'two', isComplete: 'false' }
  ];

  const result = addTodo(defaultTodos, newTodo);

  expect(result).toEqual(expected);
});

test('addTodo should not mutate the existing todo list', () => {
  const defaultTodos = [
    { id: 1, name: 'one', isComplete: 'false' },
  ];

  const newTodo = { id: 2, name: 'two', isComplete: 'false' };

  const expected = [
    { id: 1, name: 'one', isComplete: 'false' },
    { id: 2, name: 'two', isComplete: 'false' }
  ];

  const result = addTodo(defaultTodos, newTodo);

  expect(result).not.toBe(defaultTodos);
});

test ('removeTodo should remove an item by id', () => {
  const defaultTodos = [
    { id: 1, name: 'one', isComplete: 'false' },
    { id: 2, name: 'two', isComplete: 'false' }
  ];

  const targetId = 2;

  const expected = [
    { id: 1, name: 'one', isComplete: 'false' }
  ];

  const result = removeTodo(defaultTodos, targetId);

  expect(result).toEqual(expected);
});

test('removeTodo should not mutate the original array', () => {
  const defaultTodos = [
    { id: 1, name: 'one', isComplete: 'false' },
    { id: 2, name: 'two', isComplete: 'false' }
  ];

  const targetId = 2;

  const expected = [
    { id: 1, name: 'one', isComplete: 'false' }
  ];

  const result = removeTodo(defaultTodos, targetId);

  expect(result).not.toBe(defaultTodos);
});