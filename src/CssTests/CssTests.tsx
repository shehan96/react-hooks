import { useEffect, useState } from 'react';
import './csstests.css';

type DogType = {
  message: string;
  status: string;
};

const fetchData = async (): Promise<DogType> => {
  const responce = await fetch('https://dog.ceo/api/breeds/image/random');
  const result = await responce.json();
  return result;
};

const CssTests = () => {
  const [duck, setDuck] = useState<DogType>();

  useEffect(() => {
    fetchData()
      .then((result) => {
        setDuck(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div className='container-box'>
        <div className='image-holder'>
          <img className='image' src={duck?.message} />
        </div>
        <div className='content-holder'>
          <h4 className='member-name'>Shehan</h4>
          <p className='member-description'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua.
          </p>
        </div>
      </div>
    </>
  );
};

export { CssTests };
