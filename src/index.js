import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { calculator, buttonsList } from './helper';
import './index.css';

const App = () => {
  const [state, setState] = useState({
    displayVal: '0',
    firstOperand: null,
    isOperator: false,
    operator: null,
  });

  const handleClick = ({ target: { value } }) =>
    setState({
      ...state,
      ...calculator(state, value),
    });

  return (
    <>
      <div className="display">{state.displayVal}</div>
      {buttonsList.map(({ val, style }) => (
        <button key={val} className={style} onClick={handleClick} value={val}>
          {val}
        </button>
      ))}
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
