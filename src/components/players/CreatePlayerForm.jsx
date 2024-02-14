
import React, { useState } from 'react';
import { createPlayer } from '../../api/PlayersAPI';

export default function CreatePlayerForm() {
    const [name, setName] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const data = await createPlayer({ name });
            console.log('Player created:', data);

        } catch (error) {
            console.error(error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </label>
            <button type="submit">Create Player</button>
        </form>
    );
}
