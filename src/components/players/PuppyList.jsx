import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const PuppyList = () => {
  const [puppies, setPuppies] = useState([]);

  useEffect(() => {
    const fetchPuppies = async () => {
      try {
        const response = await fetch('https://fsa-puppy-bowl.herokuapp.com/api/2308-acc-et-web-pt-b/players');
        const { data } = await response.json();
        console.log(data.players); 
        setPuppies(data.players); 
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
        <Link to={`/players/${puppy.id}`}>
          {puppy.name}
        </Link>
              <p>Breed: {puppy.breed}</p>
              {/* Adding an image for each puppy */}
              <img src={puppy.imageUrl} alt={puppy.name} style={{ width: '100px', height: '100px' }} />
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
