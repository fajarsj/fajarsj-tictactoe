const checkWinner = (squares, boardSize) => {
  const lines = [];

  // rows
  let counter = 0;
  let tempLines = [];
  for (let i = 0; i < boardSize; i++) {
    tempLines.push([])
    for (let j = 0; j < boardSize; j++) {
      tempLines[i].push(counter);
      counter += 1;
    }
  }
  lines.push(...tempLines);

  // columns
  counter = 0;
  tempLines = [];
  for (let i = 0; i < boardSize; i++) {
    tempLines.push([]);
  }
  for (let i = 0; i < boardSize; i++) {
    for (let j = 0; j < boardSize; j++) {
      tempLines[j][i] = counter;
      counter += 1;
    }
  }
  lines.push(...tempLines);

  // diagonal
  counter = 0;
  tempLines = [];
  for (let i = 0; i < boardSize; i++) {
    for (let j = 0; j < boardSize; j++) {
      if (j === i) {
        tempLines.push(counter);
      }
      counter += 1;
    }
  }
  lines.push(tempLines);
  
  // anti diagonal
  counter = 0;
  tempLines = [];
  for (let i = boardSize; i > 0; i--) {
    for (let j = 0; j < boardSize; j++) {
      if (j === (i - 1)) {
        tempLines.push(counter);
      }
      counter += 1;
    }
  }
  lines.push(tempLines);

  // calculate winner
  for (let i = 0; i < lines.length; i++) {
    let checkWinner = [];
    for (let j = 1; j < boardSize; j++) {
      if (squares[lines[i][0]] && squares[lines[i][0]] === squares[lines[i][j]]) {
        checkWinner.push(true);
      }
    }

    if (checkWinner.length === (boardSize - 1)) {
      return {
        winner: squares[lines[i][0]],
        winnerCombo: squares[i],
        active: lines[i],
      };
    }
  }

  return {
    winner: null
  };
}

export default checkWinner;

