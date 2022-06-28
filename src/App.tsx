import { AnimeTitle } from './Anime';
import './App.css';
import { ArrayFun } from './ArrayFun';
import MemoSample from './MemoSample';
import { TodoApp } from './TodoApp';
// import { Parent }  from './UseCallBack/Parent';
import { UseReducer } from './UseReducer';
import { StateSample } from './useState/StateSample';
import { Parent } from './ReactMemo';

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
      <Parent />
    </>
  );
}

export default App;
