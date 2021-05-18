import React from 'react';

const ErrorExample = () => {
  let title = 'random title';

  function clickHandler() {
    title = 'hello people';
    console.log(title);
  }

  return (
    < React.Fragment >
      <h2>{title}</h2>
      <button type='button' className='btn' onClick={clickHandler}>
        Change Title
      </button>
      <h2>useState error example</h2>
    </React.Fragment >);
};

export default ErrorExample;
