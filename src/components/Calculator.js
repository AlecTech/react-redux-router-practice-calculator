import React, { useState } from 'react';
// We can try a fat arrow function as well (let's try to be consistent in the real world though!)
// If the component accepts a parameter, this is referred to as a "prop."
// Props allow us to pass values INTO our components from a parent document / component.
function Calculator (props)
{ // Every component should return JSX.
  const [new1Num, setNew1Num] = useState(0);
  const [new2Num, setNew2Num] = useState(0);
  const [newOper, setNewOper] = useState('add');
  
  let [result, setNewAnsw] = useState();
  const onFormSubmit = event => 
  {
    event.preventDefault();

    console.log(new1Num);
    const a = parseFloat(new1Num);

    console.log(newOper);

    console.log(new2Num);
    const b = parseFloat(new2Num);

    let result;
    if (newOper == 'add'){
      result = a + b;
      console.log(result);
    }
    else if (newOper == 'subtract'){
      result = a - b;
    }
    else if (newOper == 'divide' && b != 0){
      result = a / b;
    }
    else if (newOper == 'multiply'){
      result = a * b;
    }
    else if (b == 0) {
      result = "Can not divide by Zero!"
    }
    setNewAnsw(result);
  }
  
  let heading = props.heading;
  let input1 = props.input1;
  let input2 = props.input2;


  return (
    <div>
      <h1> { heading } </h1>
      <form onSubmit = {onFormSubmit}> 
      <h2> { input1 } </h2>
      <input 
      type="number" 
      onChange={e => { setNew1Num( e.target.value ) }}
      value={new1Num}
      className='field' />
       <h2>Operator</h2>
        <select 
        // name="version" onChange={handleChange} value={state.version}
        //2nd try = value={this.state.value} onChange={this.handleChange}
        onChange={e => { setNewOper( e.target.value ) }}
        value={newOper}
        className='oper' >
          <option value='add'>+</option>
          <option value='subtract'>-</option>
          <option value='divide'>/</option>
          <option value='multiply'>*</option>
        </select>
        <h2> {input2}</h2>
        <input 
      type="number" 
      onChange={e => { setNew2Num( e.target.value ) }}
      value={new2Num}
      className='field' />
      <h2></h2>
      <input type='submit' className='submitBtn success' value='Submit'/>
      <h3 className="output">RESULT: 
        <span> {new1Num} </span> 
        <span> {newOper}</span> 
        <span> {new2Num}</span> 
        <span> = {result} </span>
      </h3>
      </form>
    </div>
  );
  
}
export default Calculator
