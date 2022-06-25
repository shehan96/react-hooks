import { useState } from 'react';
import { TodoType } from './todo.types';

const URL: string = 'https://jsonplaceholder.typicode.com/todos';

export const useFetchPost = () => {
  const [loading, setLoading] = useState(false);

  const postData = async (value: TodoType) => {
    // start loading
    setLoading(true);
    let responce = await fetch(URL, {
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      method: 'POST',
      body: JSON.stringify(value),
    });
    let result = await responce.json();
    // stop loading
    setLoading(false);
    return result;
  };
  return { postData, loading };
};
