import React from 'react';
import profileImage from './img/nature.jpg'
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>My React App</h1>
      <h1>Author: Swapnil wani</h1>
      <img src = {profileImage} alt = "profile-image" id="image" />
    </div>
  );
}

export default App;
