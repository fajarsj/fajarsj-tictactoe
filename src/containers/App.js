// Reason App.js here is to make code cleaner and didnt make unnecessary file
import React, { Component } from 'react';
import Layout from '../hoc/Layout/Layout'
import Board from '../components/Board/Board';
import checkWinner from '../components/Board/CheckWinner/CheckWinner';
import Form from '../components//Form/Form';
import Modal from '../components/UI/Modal/Modal';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      onChangeBoardSize: 3,
      boardSize: 3,
      history: [{
        squares: Array(9).fill(null)
      }],
      xIsNext: true,
      stepNumber: 0,
      winSquares: {},
    }
  }

  handleClick = (i) => {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const currentHistory = history[history.length - 1];
    const tempSquares = currentHistory.squares.slice();

    if (checkWinner(tempSquares, this.state.boardSize).winner || tempSquares[i]) {
      return;
    }

    tempSquares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState((prevState) => {
      return ({
        history: history.concat([{
          squares: tempSquares
        }]),
        stepNumber: history.length,
        xIsNext: !prevState.xIsNext,
        winSquares: checkWinner(tempSquares, this.state.boardSize),
      })
    });
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0
    })
  }

  resetBoard = () => {
    this.setState({
      history: [{
        squares: Array(this.state.boardSize).fill(null)
      }],
      xIsNext: true,
      stepNumber: 0,
      winSquares: {}
    });
  }

  changeBoardSize = (e) => {
    e.preventDefault();
    if (this.state.onChangeBoardSize > 20 || this.state.onChangeBoardSize < 3) {
      alert('Board Size must be less than 20 or more than 2');
      return;
    }
    this.setState((prevState) => {
      return (
        {
          boardSize: prevState.onChangeBoardSize,
          history: [{
            squares: Array(prevState.onChangeBoardSize * prevState.onChangeBoardSize).fill(null)
          }],
          xIsNext: true,
          stepNumber: 0,
          winSquares: {}
        }
      )
    });
  }

  render() {
    const history = this.state.history;
    const currentHistory = history[this.state.stepNumber];
    const winner = checkWinner(currentHistory.squares, this.state.boardSize).winner;
    let status;
    let draw = !winner && history.length === (this.state.boardSize * this.state.boardSize + 1);

    if (winner) {
      status = `WINNER: ${winner}`;
    } else if (draw){
      status = `DRAW!`;
    } else {
      status = `Current Turn: ${this.state.xIsNext ? 'X' : 'O'}`;
    }

    const moves = history.map((step, move) => {
      const desc = move ? `Go to move # ${move}` : `Go to game start`;
      return (
        <li key={move}>
          <div onClick={() => this.jumpTo(move)}>{desc}</div>
        </li>
      )
    });

    return (
      <Layout moves={moves}>
        <Board
          squares={currentHistory.squares}
          onClick={(i) => this.handleClick(i)}
          status={status}
          boardSize={this.state.boardSize}
          winSquares={this.state.winSquares}
        />
        <Form 
          value={this.state.onChangeBoardSize} 
          onChange={(event) => this.setState({onChangeBoardSize: event.target.value})} 
          clickedApply={this.changeBoardSize}
          clickedReset={this.resetBoard}
        />
        <Modal show={winner || draw}>
          {winner && <p><span>{winner}</span>WIN!</p>}
          {draw && <p>DRAW!</p>}
        </Modal>
      </Layout>
    );
  }
}


export default App;
