import React, { Component } from 'react';
import './Grids.css';

class Grids extends Component {
  render() {
    return (
      <div className="grids">
        <div className="grid circle" id="grid1"></div>
        <div className="grid times" id="grid2"></div>
        <div className="grid" id="grid3"></div>
        <div className="grid" id="grid4"></div>
        <div className="grid" id="grid5"></div>
        <div className="grid" id="grid6"></div>
        <div className="grid" id="grid7"></div>
        <div className="grid" id="grid8"></div>
        <div className="grid" id="grid9"></div>
      </div>
    );
  }
}

export default Grids;
