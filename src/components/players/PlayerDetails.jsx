import React, { useState, useEffect } from 'react';


const PuppyDetails = ({ puppyId }) => {
    const [puppyDetails, setPuppyDetails] = useState(null);

    useEffect(() => {
        const fetchPuppyDetails = async () => {
            try {
                const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2308-acc-et-web-pt-b/players/${puppyId}`);
                const data = await response.json();
                setPuppyDetails(data);
            } catch (error) {
                console.error("Error fetching puppy details:", error);
            }
        };

        fetchPuppyDetails();
    }, [puppyId]);

    if (!puppyDetails) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>{puppyDetails.name}</h2>
            {/* Display other details as needed */}
            <p>Age: {puppyDetails.age}</p>
            <p>Breed: {puppyDetails.breed}</p>
            {/* ... add more details */}
        </div>
    );
};

export default PuppyDetails;
