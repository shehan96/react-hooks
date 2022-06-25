import './App.css';
import { FetchApi } from './fetch/FetchApi';
import { ChildA } from './useContext/ChildA';
import { ChildB } from './useContext/ChildB';
import { UserContextProvider } from './useContext/UserContextProvider';

function App() {
  return (
    <>
      <UserContextProvider test='ddd'>
        <ChildA />
        <ChildB />
      </UserContextProvider>
      <FetchApi />
    </>
  );
}

export default App;
