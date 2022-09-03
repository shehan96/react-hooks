import { MouseEventHandler, useEffect, useState } from 'react';
import './anime.css';
import { Complete } from './Complete';

type TodoType = {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
};

const fetchData = async (): Promise<TodoType[]> => {
  let URL: string = `https://jsonplaceholder.typicode.com/todos/`;
  const responce = await fetch(URL);
  const result = responce.json();
  return result;
};

const AnimeTitle = () => {
  const [todos, setTodos] = useState<TodoType[]>([]);

  useEffect(() => {
    fetchData()
      .then((result) => {
        setTodos(result);
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleChangeStatus = (todo: TodoType) => {
    setTodos(todos.map(t => {
      if(t.id === todo.id){
        return {
          ...t,
          completed: !todo.completed
        }
      }
      return t;
    }));
  };

  return (
    <>
      <div className='container'>
        {todos.map((todo) => (
          <div className='box' key={todo.id}>
            <h4 className='anime'>{todo.title}</h4>
            <p className='character'>{todo.userId}</p>
            <Complete completed={todo.completed} />
            {/** change status */}
            <button onClick={() => handleChangeStatus(todo)}>Change Status</button>
          </div>
        ))}
      </div>
    </>
  );
};

export { AnimeTitle };
