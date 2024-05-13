import "./App.css";
import React, { useState } from "react";
import Board from "../Board/Board";

function App() {
  const board = ["", "", "", "", "", "", "", "", ""];

  const [turn, setTurn] = useState(1);

  const pattern = turn % 2 === 1 ? "X" : "O";

  const handleClick = ({ target }) => {
    if (!target.innerHTML) {
      target.innerHTML = pattern;
      setTurn((prev) => prev + 1);
    }
  };

  return (
    <div className="App">
      <h1>Tic-Tac-Toe</h1>
      <Board board={board} handleClick={handleClick} />
    </div>
  );
}

export default App;
