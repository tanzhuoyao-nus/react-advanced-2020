import React from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);

  function resetItems(id) {
    setPeople(data);
  }

  return (
    <>
      {people.map((person) => {
        const { id, name } = person;
        function removeItem(id) {
          setPeople(people.filter((person) => person.id !== id));
        }
        return <div key={id} className='item'>
          <h4>{name}</h4>
          <button className='btn' onClick={() => removeItem(id)}>Remove</button>
        </div>
      })}
      <button className='btn' onClick={() => setPeople([])}>Clear Items</button>
      <button className='btn' onClick={() => resetItems([])}>Reset Items</button>
    </>
  );
};

export default UseStateArray;
