import { TodoType } from './todo.types';

const URL: string = 'https://jsonplaceholder.typicode.com/todos';

export const useFetchApi = async (): Promise<TodoType> => {
  let responce = await fetch(URL + '/1');
  let result = await responce.json();
  return result;
};
