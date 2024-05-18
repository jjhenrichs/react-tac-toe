import "./App.css";
import React, { useState, useEffect } from "react";
import Board from "../Board/Board";
import Tile from "../Tile/Tile";

function App() {
  const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);

  const [turn, setTurn] = useState(0);

  const pattern = turn % 2 === 0 ? "X" : "O";

  useEffect(() => {
    const status = document.getElementById("status");

    const winningPattern = checkWinner();
    if (winningPattern !== undefined || turn !== 9) {
      status.innerHTML =
        pattern === "X" ? "Player 1's Turn. X" : "Player 2's Turn. O";
    } else {
      status.innerHTML = "Game over - Draw";
    }
  }, [turn, pattern]);

  const handleClick = (index) => {
    const newBoard = board.map((tile, i) => {
      if (i === index) {
        tile = pattern;
        setTurn((prev) => prev + 1);
        return tile;
      } else {
        return tile;
      }
    });
    console.log(newBoard, "Line 35");
    setBoard(newBoard);
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
    for (let i in lines) {
      const [a, b, c] = lines[i];

      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        console.log(board[a]);
      }
    }
  };

  return (
    <div className="App">
      <h1>Tic-Tac-Toe</h1>
      <div id="status"></div>
      <div id="board" className="center">
        {board.map((data, index) => (
          <span
            id="tile"
            key={"tile_" + index}
            onClick={() => handleClick(index, data)}
            value={index}
          >
            {data}
          </span>
        ))}
      </div>
      <button onClick={window.location.reload.bind(window.location)}>
        Restart
      </button>
    </div>
  );
}

export default App;
