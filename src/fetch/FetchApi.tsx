import { useEffect, useState } from 'react';
import { useFetchApi } from './useFetchApi';
import { useFetchPost } from './useFetchPost';

const URL: string = 'https://jsonplaceholder.typicode.com/todos';

type TodoType = {
  id?: number;
  userId: number;
  title: string;
  completed: boolean;
};

const getTodos = async (): Promise<TodoType[]> => {
  let responce = await fetch(URL);
  let result = await responce.json();
  return result;
};

export const FetchApi = () => {
  const todoData = useFetchApi();
  const [todo, setTodo] = useState<TodoType>();
  const [todoList, setTodoList] = useState<TodoType[]>();
  const { postData, loading } = useFetchPost();

  useEffect(() => {
    const fetchDataList = async () => {
      const data = await getTodos();
      setTodoList(data);
    };

    fetchDataList().catch((error) => {
      console.log('list error', error);
    });

    todoData
      .then((result) => {
        setTodo(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handlePostTodo = () => {
    let todo: TodoType = {
      userId: 3,
      title: 'Shehan Todo',
      completed: false,
    };
    postData(todo)
      .then((r) => {
        setTodo(r);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <h1>Fetch Api</h1>
      <button onClick={handlePostTodo}>Post A Todo</button>
      <p>{loading && 'Post data is loading'}</p>
      <span>{todo && todo.title}</span>
      <ul>
        {!!todoList &&
          todoList.map((todo) => {
            return (
              <li key={todo.id}>
                ID : {todo.id} Title : {todo.title}
              </li>
            );
          })}
      </ul>
    </>
  );
};
