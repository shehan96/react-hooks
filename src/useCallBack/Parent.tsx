import { useCallback, useState } from 'react';
import { ChildA } from './ChildA';
import { ChildB } from './ChildB';

export const Parent = () => {
  const [test, setTest] = useState(0);
  const [childACount, setChildACount] = useState(0);

  const handleChildACount = useCallback(() => {
    setChildACount((childACount) => childACount + 1);
  }, [childACount]);

  console.log('Render Parent');

  return (
    <>
      <p>Child A Count Display in Parent : {childACount}</p>
      <p>Parent test {test}</p>
      <ChildA childAOnClick={handleChildACount} />
      <ChildB />
      <button onClick={() => setTest((test) => test + 1)}>Parent Button</button>
    </>
  );
};
