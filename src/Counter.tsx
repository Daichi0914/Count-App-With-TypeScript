import React, { useState } from 'react';
import Button from './Button';
import './scss/main.scss';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>{count}</p>
      <ul>
        <li>
          <Button setCount={setCount} count={count} />
        </li>
      </ul>
    </div>
  );
};

export default Counter;
