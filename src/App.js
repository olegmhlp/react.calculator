import React from 'react';
import Display from './components/Display';
import ButtonsPanel from './components/ButtonsPanel';
import operations from './components/operations'

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
     if(+buttonValue || buttonValue == 0){
         this.setState({current: buttonValue })        
     } else (this.setState({operation: buttonValue}))
      
    this.setState(operations(this.state));    
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
