import React from "react";
import "./Board.css";
import Tile from "../Tile/Tile";

export default function Board({ board, handleClick }) {
  return (
    <>
      {board.map((data, index) => (
        <Tile mark={data} index={index} handleClick={handleClick} />
        // <div
        //   id="tile"
        //   key={"tile_" + index}
        //   onClick={() => handleClick(index, data)}
        //   value={index}
        // >
        //   {data}
        // </div>
      ))}
    </>
  );
}
