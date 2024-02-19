import { useState, useEffect } from "react";
import checkWinner from "../utils/checkWinner";
import Board from "./Board";
import ResetButton from "./ResetButton";
import Strike from "./Strike";

function GameTable() {
  const [matrix, setMatrix] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState("X");
  const [gameStatus, setGameStatus] = useState("");
  const [gameOver, setGameOver] = useState(false);
  const [winnerClass, setWinnerClass] = useState("");

  const handleClick = (e) => {
    if (gameOver === false) {
      turn !== "X" ? setTurn("X") : setTurn("O");
      const id = e.target.id;
      const newMatrix = [...matrix];
      newMatrix[id] = newMatrix[id] === null ? turn : newMatrix[id];
      setMatrix(newMatrix);
    }
  };

  const handleReset = () => {
    setMatrix(Array(9).fill(null));
    setTurn("X");
    setGameStatus("");
    setGameOver(false);
    setWinnerClass("");
  };

  useEffect(() => {
    const gameCheck = checkWinner(turn, matrix);
    gameCheck.winner === "" ? null : setGameStatus(gameCheck.winner);
    gameCheck.isGameOver === true ? setGameOver(gameCheck.isGameOver) : null;
    gameCheck.winnerClass === "" ? null : setWinnerClass(gameCheck.winnerClass);
  }, [matrix]);

  return (
    <>
      <Board
        matrix={matrix}
        handleClick={handleClick}
        gameStatus={gameStatus}
        turn={turn}
      />
      <Strike winnerClass={winnerClass} />
      <ResetButton gameOver={gameOver} handleReset={handleReset} />
    </>
  );
}

export default GameTable;
