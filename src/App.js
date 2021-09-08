import React from 'react';
import BaseContainer from './containers/BaseContainer';
import Players from './components/Players';
import './App.css';

function App() {
  return (
    <div className="container">
      <h1 className="heading">Connect the Dots</h1>
      <section className="section">
        <Players />
        <BaseContainer />
        <Players />
      </section>
    </div>
  );
}

export default App;
