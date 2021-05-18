import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {

  // useEffect will run after every render
  useEffect(() => {
    document.title = `New Messages(${value})`;
  }, [])

  const [value, setValue] = useState(1);

  return (
    <>
      <h1>{value}</h1>
      <button className='btn' onClick={() => setValue(value + 1)}>Click Me</button>
    </>);
};

export default UseEffectBasics;
