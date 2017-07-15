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
      turn: 'x'
    }
  }

  updateBoard(loc, player) {

  }

  render() {
    return (
      <div className="game-app">
        <h1 className="game-title">Tic Tac Toe</h1>
        <Announce />
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
        <ResetButton />
      </div>
    );
  }
}

export default App;
