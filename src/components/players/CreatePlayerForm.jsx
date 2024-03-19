import React, { useState } from 'react';
import * as PlayersAPI from '../../api/PlayersAPI'; // Assuming PlayersAPI.js is in the same directory

export default function CreatePlayerForm() {
  const [playerName, setPlayerName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setError(null); // Reset error state before a new API call

    try {
      // This function should be defined in your PlayersAPI.js file
      const data = await PlayersAPI.createPlayer({ name: playerName });
      console.log('Player created:', data);
      setPlayerName(''); // Reset the form field after successful submission
    } catch (error) {
      console.error('Failed to create player:', error);
      setError(error.message || 'Failed to create player');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <p className="error">{error}</p>} {/* Show error message if there's an error */}
      <label htmlFor="playerName">Name:</label>
      <input
        id="playerName"
        type="text"
        value={playerName}
        onChange={(e) => setPlayerName(e.target.value)}
        disabled={isSubmitting}
      />
      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Creating...' : 'Create Player'}
      </button>
    </form>
    
  );
}
