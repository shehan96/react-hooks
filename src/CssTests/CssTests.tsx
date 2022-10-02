import { useEffect, useState } from 'react';
import './csstests.css';

type DogType = {
  message: string;
  status: string;
};

type DogBoxProps = {
  image: string | undefined;
};

const fetchData = async (): Promise<DogType> => {
  const responce = await fetch('https://dog.ceo/api/breeds/image/random');
  const result = await responce.json();
  return result;
};

const DogBox = ({ image }: DogBoxProps) => {
  return (
    <>
      <div className='card-container'>
        <div className='card-image'>
          <img src={image} />
        </div>
        <div className='card-content'>
          <h3>Dog Name</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </p>
        </div>
      </div>
    </>
  );
};

const CssTests = () => {
  const [duck, setDuck] = useState<DogType>();

  const itemArray: number[] = [0, 1, 2, 3, 4];

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
      <div className='container'>
        {itemArray.map((item, index) => {
          return (
            <div className='container-item'>
              <DogBox image={duck?.message} />
              <DogBox image={duck?.message} />
              <DogBox image={duck?.message} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export { CssTests };
