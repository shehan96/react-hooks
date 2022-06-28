import React, { useEffect, useState } from 'react';

const namesArray = ['1. sheh', '2. sss', '3. dd', '4. llll', '5. kkk'];

const ArrayFun = React.memo(() => {
  const [names, setNames] = useState<string[]>(namesArray);

  const addName = () => {
    let newName: string = 'sss' + Math.floor((Math.random() * 10) + 1);
    setNames([...names, newName]);
  };

  useEffect(() => {
    console.log('hello');
  }, []);

  return (
    <>
      <button onClick={addName}>Add Name</button>
      <ul>{names && names.map((name, index) => <li key={index}>{name}</li>)}</ul>
    </>
  );
});

export { ArrayFun };
