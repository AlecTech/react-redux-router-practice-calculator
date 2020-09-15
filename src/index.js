import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//importing store abilities from REDUX
import { createStore } from 'redux';
//importing REDUCER from our folder
import resultlistReducer from './reducer/resultlistR';
import {viewResults} from './actions/resultlistA';
//importing library that will help react and redux talk through components.
//Provider a Class sort of like component
import { Provider } from 'react-redux';

// import Calculator from './components/Calculator';
// import Calculator2 from './components/Calculator2';

// import './calculator.css';
import CalculatorOutput from './components/CalculatorOutput';

//this start area is GLOBAL
//creating STORE here
const store = createStore(
  resultlistReducer,
  // If we want to use the Redux DevTools, add this argument as well!
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
//Method subscribe (can have any function but we using console log). 
//getState() will output into console currect state data
store.subscribe( () => console.log( store.getState() ) );
//send an action to your store so that reducer can handle it
//Dispatch expected properly format action
//so here we updating or mutating the STORE
store.dispatch( viewResults( "1+1" ) );
store.dispatch( viewResults( "2+2" ) );

/* <Calculator heading="Welcome to my Calculator!" input1="Input 1:" input2="Input 2:" result/>
    <Calculator2 heading="Welcome to my Calculator!" input1="Input 1:"  result/>
    <CalculatorOutput result/> */
//this end area is GLOBAL
ReactDOM.render(
  
  //store is prop in this case. This could be {AppStore}
  //Provider provides to subsecuent components 
  <Provider store={store}>
    <CalculatorOutput/>
  </Provider>,
  document.getElementById('root')
);
