import React, { useState } from 'react';

type ExternalInfo = {
  externalInfo: string;
};

export const HOCFunction = <T,>(Component: React.FC<T & ExternalInfo>) => {
  
  const NewComponent = (props: T) => {

    const [count, setCount] = useState(0);

    const handleSetCount = () => {
      setCount(count + 1);
    }
    return <Component externalInfo='shehan' {...props} onClick={handleSetCount} count={count}/>;
  };

  return NewComponent;
};
