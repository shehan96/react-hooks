import React from 'react';

type TodoCheckProps = {
  checked: boolean;
  onChange: () => void;
};

const TodoCheck = React.memo(({ checked, onChange }: TodoCheckProps) => {
    
  return (
    <>
      <input type='checkbox' checked={checked} onChange={onChange} />
    </>
  );
});

export { TodoCheck };
