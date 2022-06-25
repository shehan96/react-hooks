import React, { useContext } from 'react';
import { UserContext } from './UserContextProvider';

export const ChildA: React.FC = () => {
  const user = useContext(UserContext);

  return (
    <>
      <h1>Child A</h1>
      <p>Name : {user.name == '' ? 'No Name' : user.name}</p>
      <>Age : {user.age == 0 ? 'No Age' : user.age}</>
    </>
  );
};
