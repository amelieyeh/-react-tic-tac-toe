import React, { Component } from 'react';
import './Grid.css';

class Grid extends Component {
  gridClick(props) {
    props.updateBoard(props.loc, props.turn);
  }

  render() {
    return (
      <div className={"grid " + this.props.loc} onClick={() => this.gridClick(this.props)}>{this.props.value}</div>
    );
  }
}

export default Grid;
