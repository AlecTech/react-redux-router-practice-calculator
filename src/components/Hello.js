import React from 'react'; // We'll need React to build our component.

// There are two ways to make a component... class and function.
// Let's give "function" a shot!
function Hello (props)
{ // Every component should return JSX.
  let input = props.input;
  let heading = props.heading;
  let empty = props.empty;
 
  return (
    <div>
    <h1> { heading } </h1>
    <h2> { input } </h2>
    <p> { empty } </p>
</div>
  );
}

// If we want to be able to import our function into other files...
// We have to export here!
export default Hello;
