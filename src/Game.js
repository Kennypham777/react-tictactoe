import React, { useState } from "react";
import GameGrid from "./GameGrid.js";

function Game() {
   const [moves, setMoves] = useState(new Array(9).fill(""));  // Track X and O moves
   const [turn, setTurn] = useState("X");  // Initial turn is X

   function gridClick(whichSquare) {
      if (moves[whichSquare] === "") {  // Check if the square is empty
         const movesCopy = [...moves];
         movesCopy[whichSquare] = turn;
         setMoves(movesCopy);  // Update the moves

         // Alternate turns between X and O
         setTurn(turn === "X" ? "O" : "X");
      }
   }

   // Reset the game
   function newGame() {
      setMoves(new Array(9).fill(""));  // Reset all moves
      setTurn("X");  // Set the first turn to X
   }

   return (
      <>
         <h1>Tic-Tac-Toe</h1>
         <GameGrid moves={moves} click={gridClick} />  {/* Render the grid */}
         <p>Turn: <strong className={turn}>{turn}</strong></p>
         <p><button onClick={newGame}>New Game</button></p>
      </>
   );
}

export default Game;
