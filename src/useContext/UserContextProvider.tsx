import { createContext, ReactNode, useState } from 'react';

type UserContextProps = {
  children: ReactNode;
  test: string;
};

type userContextType = {
  name: string;
  age: number;
  email: string;
  setNewUser: () => void; // { () : void }
};

export const UserContext = createContext<userContextType>({
  name: '',
  age: 0,
  email: '',
  setNewUser: () => {},
});

export const UserContextProvider = (props: UserContextProps) => {
  const [user, setUser] = useState({ name: '', age: 0, email: '' });

  const setNewUser = () => {
    setUser({
      name: 'Shehan',
      age: 26,
      email: 'shehan@gmail.com',
    });
  };

  const removeUser = () => {
    setUser({
      name: '',
      age: 0,
      email: '',
    });
  };

  const value = {
    ...user,
    setNewUser,
  };

  return <UserContext.Provider value={value}>{props.children}</UserContext.Provider>;
};
