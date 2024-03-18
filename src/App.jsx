import React, { useState, useEffect, useCallback } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import PuppyList from './components/players/PuppyList';
import CreatePlayerForm from './components/players/CreatePlayerForm';


function App() {
  const [puppies, setPuppies] = useState([]);

  // Fetch puppies when the component mounts
  useEffect(() => {
    // Placeholder for your fetch logic
    const fetchPuppies = async () => {
      // Fetch puppies and update state
    };
    fetchPuppies();
  }, []);

  // Callback for adding a new puppy
  const addPuppy = useCallback((newPuppy) => {
    setPuppies((prevPuppies) => [...prevPuppies, newPuppy]);
  }, []);

  // Callback for removing a puppy
  const removePuppy = useCallback((puppyId) => {
    setPuppies((prevPuppies) => prevPuppies.filter(puppy => puppy.id !== puppyId));
  }, []);

  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/home" element={<PuppyList puppies={puppies} removePuppy={removePuppy} />} />
          <Route path="/create" element={<CreatePlayerForm addPuppy={addPuppy} />} />
          {/* Define more routes as needed */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

