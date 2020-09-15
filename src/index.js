import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import Hello from './components/Hello'; // If we want to use a component in this file, we have to import it!
import Calculator from './components/Calculator';
import Calculator2 from './components/Calculator2';
import './calculator.css';

// import Button1 from './components/Button';

ReactDOM.render(
  <React.StrictMode>


    <Calculator heading="Welcome to my Calculator!" input1="Input 1:" input2="Input 2:" result/>
    <Calculator2 heading="Welcome to my Calculator!" input1="Input 1:"  result/>
   
  </React.StrictMode>,
  document.getElementById('root')
);
