import React from 'react';
import './todo.css';

type TodoHeadingProps = {
  heading: string;
};

const TodoHeading = ({ heading }: TodoHeadingProps) => {
  console.log(`Rendering ${heading} Heading`);
  return (
    <>
      <div className='container'>
        <h1 className='heading'>{heading}</h1>
      </div>
    </>
  );
};

export { TodoHeading };
