import React from 'react';

const ChildB = React.memo(() => {
  console.log(`Render Child B`);
  return (
    <>
      <h3>Child B</h3>
    </>
  );
});

export { ChildB };
