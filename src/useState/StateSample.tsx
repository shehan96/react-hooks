import { ChangeEvent, useState } from 'react';

export const StateSample = () => {
  const [value, setValue] = useState('initial value');

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <>
      <p>{value}</p>
      <input type='text' onChange={handleOnChange} />
    </>
  );
};
