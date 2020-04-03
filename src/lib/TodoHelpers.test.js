import { addTodo, 
         removeTodo,
         findById,
         generateId,
         toggleTodo,
         updateTodo,
         filterTodos
       } from './TodoHelpers';

test('addTodo should add the new todo to the list', () => {
  const defaultTodos = [
    { id: 1, name: 'one', isComplete: false },
  ];

  const newTodo = { id: 2, name: 'two', isComplete: false };

  const expected = [
    { id: 1, name: 'one', isComplete: false },
    { id: 2, name: 'two', isComplete: false }
  ];

  const result = addTodo(defaultTodos, newTodo);

  expect(result).toEqual(expected);
});

test('addTodo should not mutate the existing todo list', () => {
  const defaultTodos = [
    { id: 1, name: 'one', isComplete: false },
  ];

  const newTodo = { id: 2, name: 'two', isComplete: false };

  const expected = [
    { id: 1, name: 'one', isComplete: false },
    { id: 2, name: 'two', isComplete: false }
  ];

  const result = addTodo(defaultTodos, newTodo);

  expect(result).not.toBe(defaultTodos);
});

test('findById should get the todo by target id', () => {
  const defaultTodos = [
    { id: 1, name: 'one', isComplete: false },
    { id: 2, name: 'two', isComplete: false }
  ];

  const targetId = 2;

  const expected = { id: 2, name: 'two', isComplete: false };

  const result = findById(defaultTodos, targetId);

  expect(result).toEqual(expected);
});

test('generateId should generate a unique, random id', () => {
  const defaultTodos = [
    { id: 1, name: 'one', isComplete: false },
    { id: 2, name: 'two', isComplete: false }
  ];

  const newId = generateId();

  const result = findById(defaultTodos, newId);

  expect(result).toBeUndefined();
});

test('toggleTodo should update the isComplete field', () => {
  const defaultTodo = { id: 1, name: 'one', isComplete: false };
  
  const expected = { id: 1, name: 'one', isComplete: true }

  const result = toggleTodo(defaultTodo);

  expect(result).toEqual(expected);
});

test('updateTodo should update the todo list', () => {
  const defaultTodos = [
    { id: 1, name: 'one', isComplete: false },
    { id: 2, name: 'two', isComplete: false }
  ];

  const updatedTodo = { id: 2, name: 'two', isComplete: true };

  const expected = [
    { id: 1, name: 'one', isComplete: false },
    { id: 2, name: 'two', isComplete: true }
  ];

  const result = updateTodo(defaultTodos, updatedTodo);

  expect(result).toEqual(expected);
});

test ('removeTodo should remove an item by id', () => {
  const defaultTodos = [
    { id: 1, name: 'one', isComplete: false },
    { id: 2, name: 'two', isComplete: false }
  ];

  const targetId = 2;

  const expected = [
    { id: 1, name: 'one', isComplete: false }
  ];

  const result = removeTodo(defaultTodos, targetId);

  expect(result).toEqual(expected);
});

test('removeTodo should not mutate the original array', () => {
  const defaultTodos = [
    { id: 1, name: 'one', isComplete: false },
    { id: 2, name: 'two', isComplete: false }
  ];

  const targetId = 2;

  const expected = [
    { id: 1, name: 'one', isComplete: false }
  ];

  const result = removeTodo(defaultTodos, targetId);

  expect(result).not.toBe(defaultTodos);
});

test('filterTodos should return all items for the root route', () => {
  const defaultTodos = [
    { id: 1, name: 'one', isComplete: false },
    { id: 2, name: 'two', isComplete: true },
    { id: 3, name: 'three', isComplete: false }
  ];

  const result = filterTodos(defaultTodos, '/');

  expect(result).toEqual(defaultTodos);
});

test('filterTodos should return all complete items for the complete route', () => {
  const defaultTodos = [
    { id: 1, name: 'one', isComplete: false },
    { id: 2, name: 'two', isComplete: true },
    { id: 3, name: 'three', isComplete: false }
  ];

  const expected = [
    { id: 2, name: 'two', isComplete: true }
  ];

  const result = filterTodos(defaultTodos, '/complete');

  expect(result).toEqual(expected);
});

test('filterTodos should return all incompleted items for the active route', () => {
  const defaultTodos = [
    { id: 1, name: 'one', isComplete: false },
    { id: 2, name: 'two', isComplete: true },
    { id: 3, name: 'three', isComplete: false }
  ];

  const expected = [
    { id: 1, name: 'one', isComplete: false },
    { id: 3, name: 'three', isComplete: false }
  ];

  const result = filterTodos(defaultTodos, '/active');

  expect(result).toEqual(expected);
});