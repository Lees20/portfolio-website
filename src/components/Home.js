import React from 'react';
import '../styles/Home.css';
import DinosaurGame from './DinosaurGame';

const Home = () => {
  return (
    
    <div className="home-frame">
       
      <div className="home-screen">
        <h1 className="pixel-text">SOFTWARE ENGINEER</h1>
        <p>Pantelis Karabetsos [Building software]</p>
        <DinosaurGame />
      </div>
    </div>
  );
};

export default Home;
