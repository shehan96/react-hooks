export const Hoisting = () => {

    var x = 'shehan';
  fun(x);

  return (
    <>
      <h1>Hoisting</h1>
    </>
  );

};

const fun = (value: string) => {
  console.log(`Parameter ${value}`);
};
