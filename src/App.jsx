import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import PuppyList from './components/players/PuppyList'; 
import CreatePlayerForm from './components/players/CreatePlayerForm';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<PuppyList />} /> {/* Set PuppyList at the root path */}
          <Route path="/create" element={<CreatePlayerForm />} />
          {/* Define more routes as needed */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
