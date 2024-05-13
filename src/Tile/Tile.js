import React from "react";
import "./Tile.css";

export default function Tile({ tile, index, handleClick }) {
  return (
    <div id="tile" key={"tile_" + index} onClick={handleClick}>
      {tile}
    </div>
  );
}
