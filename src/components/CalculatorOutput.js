import React, { useState } from 'react';

function CalculatorOutput()
{
    const [result, setNewAnsw] = useState();

    return (
        <>
            <h2> Past Calculations</h2>
            <form>
                <label htmlFor="task">List:</label>
                <input 
                    id="task" 
                    type="text"
                    value={result}
                    onChange={ event => {setNewAnsw( event.target.value); } } /> 
                    
                <input type="submit" value="Add new calculations"/>
            </form>
            <ul></ul>
        </>

    );
}
export default CalculatorOutput;





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