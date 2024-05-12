import React from "react";
import "./Tile.css";

export default function Tile({ tile, index }) {
  return (
    <div id="tile" key={"tile_" + index}>
      {tile}
    </div>
  );
}
