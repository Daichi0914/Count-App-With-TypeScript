import React from 'react';

const Button = ({setCount, count}) => {
  return (
    <ul>
      <li>
        <button onClick={() => setCount(count - 10)}>-10</button>
      </li>
      <li>
        <button onClick={() => setCount(count - 1)}>-1</button>
      </li>
      <li>
        <button onClick={() => setCount(count - count)}>recet</button>
      </li>
      <li>
        <button onClick={() => setCount(count + 1)}>+1</button>
      </li>
      <li>
        <button onClick={() => setCount(count + 10)}>+10</button>
      </li>
    </ul>
  );
};

export default Button;
