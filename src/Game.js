import React, { useState } from "react"; // Import useState hook
import GameGrid from "./GameGrid.js";

function Game() {
   // Declare state variables for moves and turn
   const [moves, setMoves] = useState(new Array(9).fill(""));
   const [turn, setTurn] = useState("X"); // Initialize turn with "X"

   function gridClick(whichSquare) {
      if (moves[whichSquare] === "") {
         const movesCopy = [...moves]; // Create a copy of the moves array
         movesCopy[whichSquare] = turn; // Set the clicked square to the current turn
         setMoves(movesCopy); // Update moves state

         // Alternate the turn
         setTurn(turn === "X" ? "O" : "X");
      }
   }

   // Implement the newGame function
   function newGame() {
      setMoves(new Array(9).fill("")); // Reset the board
      setTurn("X"); // Reset the turn to "X"
   }

   return (
      <>
         <h1>Tic-Tac-Toe</h1>
         <GameGrid moves={moves} click={gridClick} />
         <p>
            Turn: <strong className={turn}>{turn}</strong>
         </p>
         <p>
            {/* Modify the button to call newGame */}
            <button onClick={newGame}>New Game</button>
         </p>
      </>
   );
}

export default Game;
