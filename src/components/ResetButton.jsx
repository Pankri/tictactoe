import React from "react";

function ResetButton({ handleReset, gameOver }) {
  if (gameOver === true) {
    return (
      <>
        <button className="resetButton" onClick={handleReset}>
          New Game
        </button>
      </>
    );
  } else {
    return;
  }
}

export default ResetButton;
