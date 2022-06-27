import { MouseEventHandler, useMemo, useState } from 'react';

const MemoSample = () => {
  const [count, setCount] = useState(0);
  const [otherCount, setOtherCount] = useState(0);

  const calculateTotal = () => {
    for (var i = 0; i < 10; i++) {
      console.log(i);
    }
  };

  useMemo(() => {
    calculateTotal();
  }, [otherCount]);

  const handleOnClick = () => {
    setCount((currentCount) => currentCount + 1);
  };

  return (
    <>
      <h1>Usememo Hook</h1>
      <p>{count}</p>
      <button onClick={handleOnClick}>Click Me</button>
      <button onClick={handleOnClick}>Calculate</button>
    </>
  );
};

export default MemoSample;
