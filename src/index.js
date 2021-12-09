import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { calculator, buttonsList } from './helper';
import './index.css';

const App = () => {
  const [state, setState] = useState({ display: '0' });

  const onClick = ({ target: { value } }) =>
    setState({ ...state, ...calculator(state, value) });

  return (
    <>
      <div id="display">{state.display}</div>
      {buttonsList.map((value) => (
        <input type="button" className="input" onClick={onClick} value={value} />
      ))}
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
