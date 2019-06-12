import React from 'react';
import './App.css';
import Display from './components/Display';
import ButtonsPanel from './components/ButtonsPanel';
import calculator from './calculate/calculator';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayVal: '0',
            firstOperand: null,
            isOperator: false,
            operator: null
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(buttonValue) {
        this.setState(calculator(this.state, buttonValue));
    }

    render() {
        return (
            <div className="calculator">
                <Display current={this.state.displayVal}/>
                <ButtonsPanel onClick={this.handleClick}/>
            </div>
        );
    }
}

export default App;
