import React, { Component } from 'react';
import Grid from './Grid';
import Announce from './Announce';
import ResetButton from './ResetButton';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      gameBoard: [
        '', '', '',
        '', '', '',
        '', '', ''
      ],
      turn: 'o',  // first player is 'o'
      winner: null
    }
  }

  updateBoard(loc, player) {
    // game over
    if(this.state.gameBoard[loc] === 'x' || this.state.gameBoard[loc] === 'o' || this.state.winner) {
      return; // invalid move
    }

    // check each grids and update gameBoard
    let currentGameBoard = this.state.gameBoard;
    currentGameBoard.splice(loc, 1, this.state.turn);
    console.log(currentGameBoard);
    this.setState({ gameBoard: currentGameBoard });

    let topRow = this.state.gameBoard[0] + this.state.gameBoard[1] + this.state.gameBoard[2];
    let midRow = this.state.gameBoard[3] + this.state.gameBoard[4] + this.state.gameBoard[5];
    let bottomRow = this.state.gameBoard[6] + this.state.gameBoard[7] + this.state.gameBoard[8];
    let leftCol = this.state.gameBoard[0] + this.state.gameBoard[3] + this.state.gameBoard[6];
    let midCol = this.state.gameBoard[1] + this.state.gameBoard[4] + this.state.gameBoard[7];
    let rightCol = this.state.gameBoard[2] + this.state.gameBoard[5] + this.state.gameBoard[8];
    let leftDiag = this.state.gameBoard[0] + this.state.gameBoard[4] + this.state.gameBoard[8];
    let rightDiag = this.state.gameBoard[2] + this.state.gameBoard[4] + this.state.gameBoard[6];
    if(
      topRow.match(/ooo|xxx/) ||
      midRow.match(/ooo|xxx/) ||
      bottomRow.match(/ooo|xxx/) ||
      leftCol.match(/ooo|xxx/) ||
      midCol.match(/ooo|xxx/) ||
      rightCol.match(/ooo|xxx/) ||
      leftDiag.match(/ooo|xxx/) ||
      rightDiag.match(/ooo|xxx/)
    ) {
      this.setState({ winner: this.state.turn });
      return;
    }

    // draw
    let moves = this.state.gameBoard.join('').replace(/ /g, '');
    if(moves.length === 9) {
      this.setState({ winner: 'draw' });
    }
    this.setState({ turn: this.state.turn === 'o' ? 'x' : 'o' });
  }

  resetBoard() {
    this.setState({
      gameBoard: [
        '', '', '',
        '', '', '',
        '', '', ''
      ],
      turn: 'o',
      winner: null
    })
  }

  render() {
    return (
      <div className="game-app">
        <h1 className="game-title">Tic Tac Toe</h1>
        <Announce winner={this.state.winner}/>
        <div className="grids">
          {this.state.gameBoard.map(function(value, i) {
            return <Grid
              key={i}
              loc={i}
              value={value}
              updateBoard={this.updateBoard.bind(this)}
              turn={this.state.turn} />
          }.bind(this))}
        </div>
        <ResetButton reset={this.resetBoard.bind(this)} />
      </div>
    );
  }
}

export default App;
