import React from 'react';
import Counter from './Counter';
import './scss/app.styles.scss';

const App = () => {
  return (
    <>
      <h1 className='title'>CountApp</h1>
      <Counter />
    </>
  );
};

export default App;
