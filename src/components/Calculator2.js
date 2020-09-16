import React, { useState } from 'react';
// We can try a fat arrow function as well (let's try to be consistent in the real world though!)
// If the component accepts a parameter, this is referred to as a "prop."
// Props allow us to pass values INTO our components from a parent document / component.
import { connect } from 'react-redux';
import {viewResults} from '../actions/resultlistA';

function Calculator2 (props)
{ // Every component should return JSX.
  const [new1Num, setNew1Num] = useState('');
  const [result, setNewAnsw] = useState('');

// method for evaluating expressing was found => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval
  const onFormSubmit = event => 
  {
    event.preventDefault();
   
    //const stringInt = Number;
    //found this regex on https://regex101.com/r/w74GSk/4
      if (/(?:(?:^|[-+_*/])(?:\s*-?\d+(\.\d+)?(?:[eE][+-]?\d+)?\s*))+$/.test(new1Num))
      {
        let result = eval(new1Num);
        setNewAnsw(result);
        let newString = `${new1Num} = ${result}`;
        // props.dispatch(viewResults(new1Num));
        // props.dispatch(viewResults(result));
        props.dispatch(viewResults(newString));
        
      } else 
      {
        alert("Not a valid input");
      }
   
  }
  
  let heading = props.heading;
  let input1 = props.input1;

  return (
    <div>
      <h1> { heading } </h1>
      <form onSubmit = {onFormSubmit}> 
      <h2> { input1 } </h2>
      <input 
      type="text" 
      onChange={e => { setNew1Num( e.target.value ) }}
      value={new1Num}
      className='field' />
      
      <h2></h2>
      <input type='submit' className='submitBtn success' value='Submit'/>
      <h3 className="output">RESULT: 
        <span> {new1Num} </span> 
        <span> = {result} </span>
      </h3>
      </form>
    </div>
  );
  
}
export default connect( state => {return {Calculator2: state}})(Calculator2);

