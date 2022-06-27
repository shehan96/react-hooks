import { ChangeEvent, useState } from 'react';

export const StateSample = () => {
  // array destructuring with useState
  const [value, setValue] = useState('initial value');
  const [count, setCount] = useState(0);

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleIncreaseCount = () => {
    setCount(count + 1);
    setCount((currentValue) => currentValue + 1);
  };

  return (
    <>
      <p>{value}</p>
      <input type='text' onChange={handleOnChange} />
      <span>Count : {count}</span>
      <button onClick={handleIncreaseCount}>Increase count</button>
    </>
  );
};
