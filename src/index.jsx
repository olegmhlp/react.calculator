import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { calculator, buttons } from './helper';
import './styles.css';

const App = () => {
  const [state, setState] = useState({ display: '0' });
  const onClick = ({ target: { value } }) =>
    setState({ ...state, ...calculator(state, value) });

  return buttons.map((i) => (
    <input type="button" onClick={onClick} value={state[i] || i} key={i} />
  ));
};

ReactDOM.render(<App />, document.getElementById('root'));
