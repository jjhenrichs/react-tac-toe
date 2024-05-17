import React from "react";
import "./Tile.css";

export default function Tile({ mark, index, handleClick }) {
  return (
    <div
      id="tile"
      key={"tile_" + index}
      onClick={(index) => handleClick(index)}
    >
      {mark}
    </div>
  );
}
