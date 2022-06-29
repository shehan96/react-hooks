import { useEffect } from 'react';

const promise = new Promise<string>((resolve, reject) => {
  setTimeout(() => {
    resolve('Wait is over : step 2');
  }, 3000);

  // reject('Error');
});

export const Promises = () => {
  useEffect(() => {
    const a = async () => {
        console.log('step 1');
        let rr = await promise;
        console.log(rr);
        console.log('step 3');
    }

    a();
  }, []);

  return (
    <>
      <h1>Promises</h1>
    </>
  );
};
