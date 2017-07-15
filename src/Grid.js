import React, { Component } from 'react';
import './Grid.css';

class Grid extends Component {
  gridClick(props) {
    props.updateBoard(props.loc, props.turn);
  }

  render() {
    let gridValueClass;
    if(this.props.value === '') {
      gridValueClass = 'grid';
    } else if(this.props.value === 'x') {
      gridValueClass = 'grid times';
    } else {
      gridValueClass = 'grid circle';
    }

    return (
      <div className={gridValueClass} onClick={() => this.gridClick(this.props)}></div>
    );
  }
}

export default Grid;
