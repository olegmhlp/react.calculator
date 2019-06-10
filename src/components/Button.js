import React, { Component } from 'react';
import './Button.css';

class Button extends Component {
  

  render() {
    return (
      <div className="buttonComponent">
        <button
        className={this.props.className}
          onClick={e => this.props.onClick(e.target.value)}
          value={this.props.value}
        >
          {this.props.label}
        </button>
      </div>
    );
  }
}

export default Button;
