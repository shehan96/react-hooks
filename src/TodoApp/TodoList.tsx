import { useState } from 'react';
import { ITodo } from './todo.types';
import { TodoCheck } from './TodoCheck';
import './todo.css';

type TodoListProps = {
  todoList: ITodo[];
};

const TodoList = ({ todoList }: TodoListProps) => {
  const [todos, setTodos] = useState<ITodo[]>(todoList);

  const handleOnChange = (t: ITodo) => {
    setTodos(todos.map(todo => {
        if(t.id === todo.id){
            t.completed = !t.completed;
            return {...todo, t};
        }
        return todo;
    }));
  };

  return (
    <>
      {todos.map((todo, index) => {
        return (
          <div key={todo.id} className='list-box'>
            <span>{todo.id}</span>
            <p className={todo.completed ? 'green' : 'red'}>{todo.title}</p>
            <TodoCheck checked={todo.completed} onChange={() => handleOnChange(todo)} />
          </div>
        );
      })}
    </>
  );
};

export { TodoList };
