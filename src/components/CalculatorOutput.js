import React, { useState } from 'react';
//this components is local and doesnt have access to dispatch comand so we 
//importing a library to help us connect react component to redux store
import { connect } from 'react-redux';
//now after we got access to props we will be importing actions
//watch out where you are now. Inside component and to get inside actions. So use .. to exit from component folder and then into action
import {viewResults} from '../actions/resultlistA';

//inside () we need props if its a 'read only' content
function CalculatorOutput( props )
{   //inside ('') is default state but it could be a boolean or an array
//this is a LOCAL STATE, which is updated by our form input (ex '1+1') but wont be accessed by other components.
    const [result, setNewAnsw] = useState('');
    //create a function to control on submit event
    //
    const submitResult = event => {
        event.preventDefault();
        //now we can use dispatch (redux command) after we made a connection and imported it
        //we using input from our form (ex '1+1') as a content for our action=result
        //this function (viewResults) will return an object that REDUCER can understand
        //then reducer updates STORE
        props.dispatch(viewResults(result));
    }
    return (
        <>
            <h2>Calculator Output</h2>
            <form onSubmit={submitResult}>
                <label htmlFor="task">List:</label>
                <input 
                    id="task" 
                    type="text"
                    value={result}
                    onChange={ event => {setNewAnsw( event.target.value); } } /> 
                    
                <input type="submit" value="Add new calculations"/>
            </form>
    {/* we can pass information to sub components now ex. <ToDoList list={props.toDos}/> which is siblings */}
            <ul></ul>
        </>
    );
}
//this is only where we use connect import library. Connect()() means this first function returns a function
//and we passing argument into the function thats returning. So thats how we connect REDUX to component
//think of 'state' as a STORE. So whats comming from REDUX is going to be a part of our props. (prop.ToDos)
export default connect(
    state => { return { CalculatorOutput: state } }
    )(CalculatorOutput);
    //so now we have access to props





// import React, { useState } from 'react';
// import {connect} from 'react-redux';



// function CalculatorOutput (props)
// {
//     let [result, setNewAnsw] = useState();
//     const onFormSubmit = event => 
//     {
//       event.preventDefault();
//     //   console.log(new1Num);
      
//     //   let result = eval(new1Num);
//     //   console.log(result);
  
//       setNewAnsw(result);
      
//     }
// <form onSubmit = {onFormSubmit}>
//     <h2>Past Calculations</h2>
//     <h3 className="output">RESULT: 
//         <ul>
//             <span> = {result} </span>
//             {props.toDos.map( ( toDo ) => {
//           return (
//             <li key={toDo.id}>
//               {toDo.task}
//               <button onClick={ () => { props.dispatch( removeToDo( toDo.id ) ) } }>
//                 Complete To-Do
//               </button>
//             </li>
//           );}
//         )}
            
            
//             </ul>
//     </h3>
// </form>
// }
  

//  export default connect( state => ( { CalculatorOutput: state } ) )( CalculatorOutput );