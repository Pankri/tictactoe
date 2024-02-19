function checkWinner(turn, matrix) {
  const combinations = [
    // combinations for rows
    [0, 1, 2, "strike-1"],
    [3, 4, 5, "strike-2"],
    [6, 7, 8, "strike-3"],

    // combinations for columns
    [0, 3, 6, "strike-4"],
    [1, 4, 7, "strike-5"],
    [2, 5, 8, "strike-6"],

    // combinations for diagonals
    [0, 4, 8, "strike-7"],
    [2, 4, 6, "strike-8"],
  ];

  let winner = "";
  let isGameOver = false;
  let winnerClass = "";

  if (matrix.every((x) => x !== null)) {
    winner = "Draw";
    isGameOver = true;
  }

  for (let combination of combinations) {
    const value1 = matrix[combination[0]];
    const value2 = matrix[combination[1]];
    const value3 = matrix[combination[2]];

    if (value1 !== null && value1 === value2 && value2 === value3) {
      winner = turn === "X" ? "Player O Wins" : "Player X Wins";
      isGameOver = true;
      winnerClass = combination[3];
    }
  }

  return { winner, isGameOver, winnerClass };
}

export default checkWinner;
