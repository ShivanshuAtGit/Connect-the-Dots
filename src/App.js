import React from 'react';
import BaseContainer from './containers/BaseContainer';
import HomePage from './containers/HomePage';
import './App.css';

function App() {
  const initialValues = {
    row: "",
    cell: "",
    player1: "",
    player2: "",
  }

  const [values, setValues] = React.useState(initialValues);
  const [isStarted, setStarted] = React.useState(false);

  const handlePlay = ({ player1, player2, row, cell }) => {
    setValues({
      row,
      cell,
      player1,
      player2
    });
    setStarted(true);
  }

  return (
    <div className="container">
      <h1 className="heading" >Connect the Dots</h1>
      {
        isStarted ?
          <BaseContainer
            numX={parseInt(values.row)}
            numY={parseInt(values.cell)}
            player1={values.player1 === "" ? "Player 1": values.player1}
            player2={values.player2 === "" ? "Player 2": values.player2}
          />
          : <HomePage handlePlay={handlePlay} />
      }
    </div>
  );
}

export default App;
