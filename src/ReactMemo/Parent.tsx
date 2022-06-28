import { useCallback, useState } from 'react';
import { ChildA } from './ChildA';
import { ChildB } from './ChildB';

const Parent = () => {
  console.log(`Render Parent`);

  const [countParent, setCountParent] = useState(1);
  const [countA, setCountA] = useState(2);
  const [countB, setCountB] = useState(3);

  const handleA = useCallback(() => {
    setCountA((c) => c + 1);
  }, [countA]);

  return (
    <>
      <h1>Memo Parent</h1>
      {countParent}
      <button onClick={() => setCountParent((c) => c + 1)}>Parent Count Btn</button>
      <ChildA onClick={handleA} value={countA} />
      <ChildB />
    </>
  );
};

export { Parent };
