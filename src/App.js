import React from 'react';
import Display from './components/Display';
import ButtonsPanel from './components/ButtonsPanel';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: 0,
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick(buttonValue) {
    this.setState({ result: buttonValue });
  }

  render() {
    return (
      <div className="calculator">
        <Display result={this.state.result} />
        <ButtonsPanel onClick={this.onClick} />       
      </div>
    );
  }
}

export default App;
