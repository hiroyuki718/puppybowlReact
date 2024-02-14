import React, { useState, useEffect } from 'react';

const PuppyList = () => {
  const [puppies, setPuppies] = useState([]);

  useEffect(() => {
    const fetchPuppies = async () => {
      try {
        const response = await fetch('https://fsa-puppy-bowl.herokuapp.com/api/2308-acc-et-web-pt-b/players');
        const data = await response.json();
        console.log(data); 
        setPuppies(data);
      } catch (error) {
        console.error('Failed to fetch puppies:', error);
      }
    };

    fetchPuppies();
  }, []);

  return (
    <div>
      <h1>Puppy List</h1>
      {puppies.length > 0 ? (
        <ul>
          {puppies.map((puppy) => (
            <li key={puppy.id}>
              <h2>{puppy.name}</h2>
              <p>Breed: {puppy.breed}</p>
              <p>Age: {puppy.age}</p>
              
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading puppies...</p>
      )}
    </div>
  );
};

export default PuppyList;
