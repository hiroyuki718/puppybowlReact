// src/api/PlayersAPI.js

const baseURL = 'https://fsa-puppy-bowl.herokuapp.com/api/2308-acc-et-web-pt-b/players';

export const fetchPlayers = async () => {
    const response = await fetch(baseURL);
    if (!response.ok) throw new Error('Failed to fetch players');
    return response.json();
};

export const createPlayer = async (playerData) => {
    const response = await fetch(baseURL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(playerData),
    });
    if (!response.ok) throw new Error('Failed to create player');
    return response.json();
};

export const deletePlayer = async (playerId) => {
    const response = await fetch(`${baseURL}/${playerId}`, { method: 'DELETE' });
    if (!response.ok) throw new Error('Failed to delete player');
    return response.json();
};
