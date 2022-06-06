import { useState } from 'react';

type ChildAProps = {
  childAOnClick: () => void;
};

export const ChildA = ({ childAOnClick }: ChildAProps) => {
  console.log('Render Child A');
  return (
    <>
      <button onClick={childAOnClick}>Child A Button</button>
    </>
  );
};
