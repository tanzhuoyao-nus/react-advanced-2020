import React, { useState } from 'react';
// useState is a NAMED import

const UseStateBasics = () => {
  const [text, setText] = useState('random title');

  function handleClick() {
    if (text === 'random title') {
      setText("title random");
    } else {
      setText("random title")
    }
  }

  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button className='btn' onClick={handleClick}>
        Change Title
      </button>
    </React.Fragment>
  )
};

export default UseStateBasics;
