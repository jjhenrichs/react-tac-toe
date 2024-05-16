import "./App.css";
import React, { useState, useEffect } from "react";
import Board from "../Board/Board";

function App() {
  const [board, setBoard] = useState(["", "", "", "X", "", "", "", "", ""]);

  const [turn, setTurn] = useState(1);

  const pattern = turn % 2 === 1 ? "X" : "O";

  useEffect(() => {
    const status = document.getElementById("status");

    const winningPattern = checkWinner();
    console.log(winningPattern);
    if (winningPattern !== undefined || turn !== 10) {
      status.innerHTML =
        pattern === "X" ? "Player 1's Turn. X" : "Player 2's Turn. O";
    } else {
      status.innerHTML = "Game over - Draw";
    }

    console.log(winningPattern, turn);
  }, [turn, pattern]);

  const handleClick = (e) => {
    e.preventDefault();
    if (!e.target.innerHTML) {
      e.target.innerHTML = pattern;
      setTurn((prev) => prev + 1);
    }
  };

  const checkWinner = () => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    console.log("Liine 46");
    for (let i in lines) {
      console.log("Liine 48");
      const [a, b, c] = lines[i];
      console.log("Line 50: ", i, a, b, c, board);

      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        console.log(board[a]);
      }
    }
  };

  return (
    <div className="App">
      <h1>Tic-Tac-Toe</h1>
      <div id="status"></div>
      <Board board={board} handleClick={handleClick} />
      <button onClick={window.location.reload.bind(window.location)}>
        Restart
      </button>
    </div>
  );
}

export default App;
