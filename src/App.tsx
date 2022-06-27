import './App.css';
import MemoSample from './MemoSample';
import { Parent }  from './UseCallBack/Parent';
import { UseReducer } from './UseReducer';
import { StateSample } from './useState/StateSample';

function App() {
  return (
    <>
      {/* <StateSample /> */}
      {/* <MemoSample /> */}
      <Parent />
      {/* <UseReducer /> */}
    </>
  );
}

export default App;
