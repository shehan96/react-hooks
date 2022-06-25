import React, { useContext } from 'react';
import { UserContext } from './UserContextProvider';

export const ChildB: React.FC = () => {
  const { setNewUser } = useContext(UserContext);

  return (
    <>
      <h1>Child B</h1>
      <button
        onClick={() => {
          setNewUser();
        }}
      >
        Click From Child B
      </button>
    </>
  );
};
