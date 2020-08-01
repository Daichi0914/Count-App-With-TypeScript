import React from 'react';

interface ButtonProps {
  count: number;
  setCount: Function;
}

const manyCount: number = 10;
const littleCount: number = 1;

const Button = ({ count, setCount }: ButtonProps): JSX.Element => {
  const onManyDecrease = (): void => {
    setCount(count - manyCount);
  };
  const onLittleDecrease = () => {
    setCount(count - littleCount);
  };
  const onReset = () => {
    setCount(count - count);
  };
  const onLittleIncrease = () => {
    setCount(count + littleCount);
  };
  const onManyIncrease = () => {
    setCount(count + manyCount);
  };

  return (
    <ul>
      <li>
        <button onClick={onManyDecrease}> -{manyCount} </button>
      </li>
      <li>
        <button onClick={onLittleDecrease}> -{littleCount} </button>
      </li>
      <li>
        <button onClick={onReset}> reset </button>
      </li>
      <li>
        <button onClick={onLittleIncrease}> +{littleCount} </button>
      </li>
      <li>
        <button onClick={onManyIncrease}> +{manyCount} </button>
      </li>
    </ul>
  );
};

export default Button;
