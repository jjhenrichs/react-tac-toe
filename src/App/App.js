import "./App.css";
import React, { useState } from "react";
import Board from "../Board/Board";

function App() {
  const board = ["", "", "", "", "", "", "", "", ""];

  const [turn, setTurn] = useState(1);

  const pattern = turn % 2 === 1 ? "X" : "O";

  const handleClick = (e) => {
    e.preventDefault();
    if (!e.target.innerHTML) {
      e.target.innerHTML = pattern;
      setTurn((prev) => prev + 1);
    }
  };

  return (
    <div className="App">
      <h1>Tic-Tac-Toe</h1>
      <div id="status">Begin Game</div>
      <Board board={board} handleClick={handleClick} />
      <button onClick={window.location.reload.bind(window.location)}>
        Restart
      </button>
    </div>
  );
}

export default App;
