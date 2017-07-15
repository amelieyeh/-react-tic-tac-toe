import React, { Component } from 'react';
import './Announce.css';

export default class Announce extends Component {
  render() {
    let winner = this.props.winner;
    let result;
    if(winner === 'draw') {
      result = 'it\'s a draw';
    } else if(winner === 'o') {
      result = 'winner is o';
    } else if(winner === 'x') {
      result = 'winner is x';
    } else {
      result = 'Let\'s play!';
    };

    return (
      <div className="announce">
        <h2>{ result }</h2>
      </div>
    )
  }
}
