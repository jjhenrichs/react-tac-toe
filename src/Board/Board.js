import React from "react";
import "./Board.css";
import Tile from "../Tile/Tile";

export default function Board() {
  const board = ["", "", "", "", "", "", "", "", ""];
  return (
    <div id="board" className="center" board={board}>
      <Tile />
      <Tile />
    </div>
  );
}
