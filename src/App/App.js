import "./App.css";
import React, { useState } from "react";
import Board from "../Board/Board";

function App() {
  const board = ["X", "X", "", "", "", "", "", "", ""];

  const [turn, setTurn] = useState(1);

  const pattern = turn % 2 === 1 ? "X" : "O";

  return (
    <div className="App">
      <h1>Tic-Tac-Toe</h1>
      <Board board={board} />
    </div>
  );
}

export default App;
