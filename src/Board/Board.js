import React from "react";
import "./Board.css";
import Tile from "../Tile/Tile";

export default function Board({ board, handleClick }) {
  return (
    <div id="board" className="center">
      {board.map((tile, index) => (
        <Tile tile={tile} index={index} handleClick={handleClick} />
      ))}
    </div>
  );
}
