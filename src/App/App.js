import "./App.css";
import React, { useState, useEffect } from "react";
import Board from "../Board/Board";
import Tile from "../Tile/Tile";

function App() {
  const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);
  const [winner, setWinner] = useState("");
  const [turn, setTurn] = useState(0);

  const pattern = turn % 2 === 0 ? "X" : "O";

  useEffect(() => {
    const status = document.getElementById("status");
    const winning_pattern = checkWinner();

    if (winning_pattern) {
      setWinner((prev) => (prev = winning_pattern));
    }

    if (turn < 9 && !winner) {
      status.innerHTML =
        pattern === "X" ? "Player 1's Turn. X" : "Player 2's Turn. O";
    } else {
      if (!winner) {
        status.innerHTML = "Game over - Draw";
      } else {
        status.innerHTML =
          winner === "X"
            ? "Game Over - Player 1 Wins"
            : "Game Over - Player 2 Wins";
      }
    }
  }, [turn, pattern, winner]);

  const handleClick = (index, data) => {
    if (!winner) {
      const newBoard = board.map((tile, i) => {
        if (i === index && !data) {
          tile = pattern;
          setTurn((prev) => prev + 1);
          return tile;
        } else {
          return tile;
        }
      });
      setBoard(newBoard);
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
    for (let i in lines) {
      const [a, b, c] = lines[i];

      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
  };

  return (
    <div className="App">
      <h1>Tic-Tac-Toe</h1>
      <div id="status"></div>
      <div id="board" className="center">
        {board.map((data, index) => (
          <div
            id="tile"
            key={"tile_" + index}
            onClick={() => handleClick(index, data)}
            value={index}
            disabled={winner === "X" || winner === "O"}
          >
            {data}
          </div>
        ))}
      </div>
      <button
        id="restart"
        onClick={window.location.reload.bind(window.location)}
      >
        Restart
      </button>
    </div>
  );
}

export default App;
