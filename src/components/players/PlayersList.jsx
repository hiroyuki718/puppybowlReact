// src/components/players/PlayersList.js
import React, { useEffect, useState } from 'react';
import { fetchPlayers } from '../../api/PlayersAPI';

export default function PlayersList() {
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        const getPlayers = async () => {
            try {
                const data = await fetchPlayers();
                setPlayers(data);
            } catch (error) {
                console.error(error);
            }
        };
        getPlayers();
    }, []);

    return (
        <div>
            {players.map((player) => (
                <div key={player.id}>
                    {player.name}

                </div>
            ))}
        </div>
    );
}
