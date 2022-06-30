import { AnimeTitle } from './Anime';
import './App.css';
import { ArrayFun } from './ArrayFun';
import MemoSample from './MemoSample';
import { TodoApp } from './TodoApp';
// import { Parent }  from './UseCallBack/Parent';
import { UseReducer } from './UseReducer';
import { StateSample } from './useState/StateSample';
import { Parent } from './ReactMemo';
import { Debounce } from './Debounce';
import { CssTests } from './CssTests';
import { ComA } from './HOC/ComA';
import { Promises } from './Promises/Promises';
import { Hoisting } from './Hoisting/Hoisting';

function App() {
  return (
    <>
      {/* <StateSample /> */}
      {/* <MemoSample /> */}
      {/* <Parent /> */}
      {/* <UseReducer /> */}
      {/* <ArrayFun /> */}
      {/* <AnimeTitle /> */}
      {/* <TodoApp /> */}
      {/* <Parent /> */}
      {/* <Debounce /> */}
      {/* <CssTests /> */}
      {/* <ComA age={10}/> */}
      {/* <Promises /> */}
      <Hoisting />
    </>
  );
}

export default App;
