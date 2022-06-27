import React from 'react';

type CountProps = {
  text: string;
  count: number;
};

const Count = ({ text, count }: CountProps) => {
  console.log(`Render ${text} Count`);
  return (
    <>
      <p>
        {text} - {count}
      </p>
    </>
  );
};

export default React.memo(Count);