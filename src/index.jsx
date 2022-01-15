import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { calc, buttons } from './helper';
import './styles.css';

const App = () => {
  const [s, sT] = useState({ display: '0' });

  return buttons.map((i) => (
    <div onClick={() => sT({ ...s, ...calc(s, i) })}>{s[i] || i}</div>
  ));
};

ReactDOM.render(<App />, document.getElementById('root'));
