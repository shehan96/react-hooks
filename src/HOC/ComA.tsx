import { HOCFunction } from './HOCFunction';

type Props = {
  externalInfo ?: string;
  age: number;
  count ?: number;
  onClick ?: () => void 
};

export const ComA = HOCFunction((props: Props) => {
  return (
    <>
      <h1>Com A Component</h1>
      {props.age}
      {JSON.stringify(props.externalInfo)}
      {props.count}
      <button onClick={props.onClick}>Click Me</button>
    </>
  );
});
