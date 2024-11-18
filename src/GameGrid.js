import React from "react";
import Square from "./Square.js";

function GameGrid(props) {
   const moves = props.moves;

   return (
      <div id="game-grid">
         {moves.map((move, index) => (
            <Square key={index} player={move} click={() => props.click(index)} />
         ))}
      </div>
   );
}

export default GameGrid;
