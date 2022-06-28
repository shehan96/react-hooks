import { ChangeEvent, useState } from 'react';

type name = {
  firstName: string;
  lastName: string;
};

export const StateSample = () => {
  // array destructuring with useState
  const [value, setValue] = useState('initial value');
  const [count, setCount] = useState(0);
  const [name, setName] = useState<name>({ firstName: '', lastName: '' });

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
      <br />
      <p>First Name : {name.firstName}</p>
      <p>Last Name : {name.lastName}</p>
      <form>
        <input type='text' value={name.firstName} onChange={(e) => setName({ ...name, firstName: e.target.value })} />
        <input type='text' value={name.lastName} onChange={(e) => setName({ ...name, lastName: e.target.value })} />
      </form>
    </>
  );
};
