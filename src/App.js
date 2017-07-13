import React, { Component } from 'react';
import logo from './logo.svg';
import Grids from './Grids';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="game-app">
        <h1 className="game-title">Tic Tac Toe</h1>
        <Grids/>
      </div>
    );
  }
}

export default App;
