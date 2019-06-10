import React, { Component } from 'react';
import './Display.css';

class Display extends Component {
  render() {
    return (
      <div className="display">
        <p>{this.props.current}</p>
      </div>
    );
  }
}

export default Display;
