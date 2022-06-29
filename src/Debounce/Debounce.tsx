import { ChangeEvent, useEffect, useState } from 'react';
import { useDebounce } from './useDebounce';

const Debounce = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const debounceValue = useDebounce(inputValue, 1000);

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  useEffect(() => {
    console.log(inputValue);
  }, [debounceValue]);

  return (
    <>
      <p>Debounce</p>
      <p>User Input Value : {inputValue}</p>
      <input type='text' value={inputValue} onChange={(event) => handleOnChange(event)} />
    </>
  );
};

export { Debounce };
