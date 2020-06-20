import React from 'react';
import Square from './Square/Square';
import Status from './Status/Status';
import classes from './Board.module.css';

const Board = (props) => {
  const renderSquare = (i) => {
    const squares = props.squares;
    let active = false;
    
    if (props.winSquares.winner && props.winSquares.active) {
      for (const value of props.winSquares.active) {
        if (value === i) {
          active = true;
          break;
        }
      }
    }
    return (
      <Square 
        value={squares[i]}
        onClick={() => props.onClick(i)}
        active={active}
      />
    )
  }

  const boardSize = props.boardSize;
  let squares = [];
  for (let i = 0; i < boardSize; ++i) {
    let row = [];
    for (let j = 0; j < boardSize; ++j) {
      row.push(renderSquare(i * boardSize + j));
    }
    squares.push(<div key={Math.random()} className={classes.BoardRow}>{row}</div>);
  }

  return(
    <React.Fragment>
      <Status status={props.status} />
      <div className={classes.Board}>
        {squares}
      </div>
    </React.Fragment>
  )
}


export default Board;