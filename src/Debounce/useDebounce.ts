import { useState, useEffect } from 'react';

export const useDebounce = (value: string, delay: number) => {
  const [debouncedValue, setDebounceValue] = useState(value);

  useEffect(() => {
    const hanler = setTimeout(() => {
      setDebounceValue(value);
    }, delay);

    return () => {
      clearInterval(hanler);
    };
  }, [value]);

  return debouncedValue;
};
