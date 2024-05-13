import React from "react";
import "./Tile.css";

export default function Tile({ tile, index }) {
  return (
    <div id="tile" className="center" key={"tile_" + index}>
      {tile}
    </div>
  );
}
