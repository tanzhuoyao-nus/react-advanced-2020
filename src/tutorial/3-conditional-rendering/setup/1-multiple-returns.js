import React, { useState, useEffect } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';

const MultipleReturns = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [user, setUser] = useState('Default User');

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((user) => {
        console.log(user)
        setUser(user);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        setError(true);
      });
  }, [])

  if (loading) {
    return <h2>Loading...</h2>
  } else if (error) {
    return <h2>Error :(</h2>
  } else {
    return (
      <div>
        <h2>Success!</h2>
        <h1>{user.login}</h1>
      </div>
    );
  }

};

export default MultipleReturns;
