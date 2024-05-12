import "./App.css";
import React from "react";
import Board from "../Board/Board";

function App() {
  const board = ["X", "X", "", "", "", "", "", "", ""];

  return (
    <div className="App">
      <h1>Tic-Tac-Toe</h1>
      <Board board={board} />
    </div>
  );
}

export default App;
