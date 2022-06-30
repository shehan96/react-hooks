import { useReducer } from 'react';

type Action = {
  type: 'increase' | 'decrise';
  payload: number;
};

const reducer = (state: number, action : Action) => {
  switch (action.type) {
    case 'increase':
      return state + 1;
    case 'decrise':
      return state - 1;
    default:
      throw new Error('Undefine action type');
  }
};

export const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, 0);

  return (
    <>
      {state}
      <h1>Use Reducer</h1>
      <button onClick={() => dispatch({ type: 'increase', payload: 1 })}>+ Increase</button>
      <button onClick={() => dispatch({ type: 'decrise', payload: 0 })}>- Descrease</button>
    </>
  );
};
