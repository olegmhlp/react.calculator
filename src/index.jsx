import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { calc, buttons } from './helper';
import './styles.css';

const App = () => {
  const [state, setState] = useState({ display: '0' });
  const onClick = (e) => setState({ ...state, ...calc(state, e) });

  return buttons.map((i) => (
    <input type="button" onClick={onClick} value={state[i] || i} key={i} />
  ));
};

ReactDOM.render(<App />, document.getElementById('root'));
