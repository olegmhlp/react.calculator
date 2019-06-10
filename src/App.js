import React from 'react';
import './App.css';
import Display from './components/Display';
import ButtonsPanel from './components/ButtonsPanel';
import operations from './components/operations';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
      next: 0,
      operation: null
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick(buttonValue) {
      this.setState({current: this.state.current + buttonValue})
      if(this.state.current.toString().length >= 8){
          document.getElementById('displayText').style.fontSize = '25px';
      }
    // if (+buttonValue || buttonValue == 0) {
    //   this.setState(prevState => ({
    //     current: prevState.current + buttonValue
    //   }));
    // } else {
    //   this.setState({
    //     operation: buttonValue
    //   });
    // }

    if (buttonValue === 'AC') {
      this.setState({ 
          current: 0,
        operation: null });
    }
    console.log(
      'Current: ' +
        this.state.current +
        '/n' +
        'Operation: ' +
        this.state.operation
    );
  }

  render() {
    return (
      <div className="calculator">
        <Display current={this.state.current} />
        <ButtonsPanel onClick={this.onClick} />
      </div>
    );
  }
}

export default App;
