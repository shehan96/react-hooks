import { useCallback, useState } from 'react';
import Button from './Button';
import Count from './Count';
import { Title } from './Title';

export const Parent = () => {
  let name = 'Parent';
  console.log(`Render ${name}`);

  const [age, setAge] = useState(0);
  const [salary, setSalary] = useState(10000);

  const incrementAge = () => {
    setAge((currentAge) => currentAge + 1);
  };

  // new increment salary function will create for each parent component re-render
  const incrementSalary = useCallback(() => {
    setSalary((currentSalary) => currentSalary + 500);
  }, [salary]);

  return (
    <>
      <Title />
      <Count text='Age' count={age} />
      <Button text='Age' click={incrementAge} />
      <Count text='Salary' count={salary} />
      <Button text='Salary' click={incrementSalary} />
    </>
  );
};
