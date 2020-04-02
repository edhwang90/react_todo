import { addTodo } from './TodoHelpers';

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

test ('addTodo should not mutate the existing todo list', () => {
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