import React from 'react';
import './App.css';
import Display from './components/Display';
import ButtonsPanel from './components/ButtonsPanel';
import operations from './components/operations';
import { isNumber } from 'util';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: 0,
      current: 0,
      next: 0,
      operation: null
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonValue) {
    // this.setState({current: this.state.current + buttonValue})
    if (this.state.current.toString().length >= 8) {
      document.getElementById('displayText').style.fontSize = '25px';
    }

    if (!this.state.operation) {
      if (+buttonValue || buttonValue == 0) {
        this.setState({
          current: this.state.current + buttonValue,
          result: this.state.result + buttonValue
        });
      } else {
        this.setState({
          operation: buttonValue,
          result: this.state.result + buttonValue
        });
      }
    } else {
      this.setState({
        next: this.state.next + buttonValue,
        result: this.state.result + buttonValue
      });
    }

    if (buttonValue === 'AC') {
      this.setState({
        current: 0,
        next: 0,
        result: 0,
        operation: null
      });
    }

    if (buttonValue === '=') {
      const resultCalc = operations(
        +this.state.current,
        +this.state.next,
        this.state.operation
      );
      this.setState({ result: resultCalc });
    }
    console.log(
      'Current: ' +
        this.state.current +
        '\n' +
        'Next: ' +
        this.state.next +
        '\n' +
        'Operation: ' +
        this.state.operation
    );
  }

  render() {
    return (
      <div className="calculator">
        <Display current={this.state.result} />
        <ButtonsPanel onClick={this.handleClick} />
      </div>
    );
  }
}

export default App;
