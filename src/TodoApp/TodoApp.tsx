import { ITodo } from './todo.types';
import { TodoHeading } from './TodoHeading';
import { TodoList } from './TodoList';

const sampleList: ITodo[] = [
  { id: 1, title: 'Task 01', completed: false },
  { id: 2, title: 'Task 02', completed: false },
  { id: 3, title: 'Task 03', completed: true },
  { id: 4, title: 'Task 04', completed: false },
  { id: 5, title: 'Task 05', completed: true },
  { id: 6, title: 'Task 06', completed: true },
  { id: 7, title: 'Task 07', completed: false },
];

const TodoApp = () => {
  return (
    <>
      <TodoHeading heading='My Todo App' />
      <TodoList todoList={sampleList} />
    </>
  );
};

export { TodoApp };
