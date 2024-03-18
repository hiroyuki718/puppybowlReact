import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function PlayerDetails() {
  const { id } = useParams(); // This should match the dynamic segment of the route specified in App.jsx
  const [playerDetails, setPlayerDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null); // Add state to track errors

  useEffect(() => {
    async function fetchPlayerDetails() {
      setIsLoading(true);
      setError(null); // Reset error state before new API call
      try {
        const response = await fetch(`/api/players/${id}`); // Ensure this matches your API route for fetching player details
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`); // Check if the response was successful
        }
        const data = await response.json();
        setPlayerDetails(data);
      } catch (error) {
        console.error('Error fetching player details:', error);
        setError(error.message); // Save any error messages to state
      } finally {
        setIsLoading(false);
      }
    }

    fetchPlayerDetails();
  }, [id]); // Effect re-runs if id changes

  if (isLoading) {
    return <div>Loading player details...</div>;
  }

  if (error) {
    return <div>Error fetching details: {error}</div>; // Display any error that occurred during fetch
  }

  if (!playerDetails) {
    return <div>No player details found.</div>;
  }

  // Destructure the details for easier access
  const { name, image, breed, description } = playerDetails;

  return (
    <div>
      <h1>{name}</h1>
      <img src={image} alt={name} />
      <p>Breed: {breed}</p>
      <p>Description: {description}</p>
      {/* You can add more details here, such as mapping over an array of details if applicable */}
    </div>
  );
}

export default PlayerDetails;
