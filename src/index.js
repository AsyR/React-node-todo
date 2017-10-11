import './index.css';
import './foundation-6.4.2-minimal/css/foundation.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import ToDoBox from './components/todobox';

ReactDOM.render(
  <ToDoBox />,
  document.getElementById('root')
);
