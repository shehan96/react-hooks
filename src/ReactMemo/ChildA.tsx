import React from 'react';

type AProps = {
  onClick: () => void;
  value: number;
};

const ChildA = React.memo(({ onClick, value }: AProps) => {
  console.log(`Render Child A`);

  return (
    <>
      <h2>Child A</h2>
      <p>A Value : {value}</p>
      <button onClick={onClick}>Child A Btn</button>
    </>
  );
});

export { ChildA };
