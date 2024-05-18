import React from "react";
import "./Board.css";

export default function Board({ board, handleClick }) {
  return (
    <>
      {board.map((data, index) => (
        <div
          id="tile"
          key={"tile_" + index}
          onClick={() => handleClick(index, data)}
          value={index}
        >
          {data}
        </div>
      ))}
    </>
  );
}
