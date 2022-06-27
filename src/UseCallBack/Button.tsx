import React from 'react';

type ButtonProps = {
  text: string;
  click: () => void;
};

const Button = ({ text, click }: ButtonProps) => {
  console.log(`Render ${text} Button`);
  return (
    <>
      <button onClick={click}>Increment - {text}</button>
    </>
  );
};


export default React.memo(Button);