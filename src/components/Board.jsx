import React from "react";

function Board({ matrix, handleClick, gameStatus, turn }) {
  return (
    <>
      <header>
        <h1>Tic Tac Toe</h1>
      </header>
      <div className="table">
        {matrix.map((item, index) => (
          <p key={index} id={index} className="block" onClick={handleClick}>
            {item}
          </p>
        ))}
      </div>
      <p className="gameStatus">{gameStatus}</p>
    </>
  );
}

export default Board;
