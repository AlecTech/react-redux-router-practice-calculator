import React from 'react'; 

function Home (props)
{ // Every component should return JSX.
  let input = props.input;
  let heading = props.heading;
  let empty = props.empty;
 
  return (
    <div>
        <h1> { heading } </h1>
        <h1>Welcome to this Calculator Pages</h1>
        <h2> { input } </h2>
        <h2>This Website shows the difference between Global STORE and Local STORE</h2>
        <p> { empty } </p>
        <ul>
            <h4>Essentually this app has 3 different pages which are constructed in different ways to show advantages of having a Global State</h4>
            <li> List of Expressions</li>
            <p> Calculator Archives is storing everything from the Global STORAGE</p>
            <li> Local input and storage calculator</li>
            <p> Local Calculator Form is only capable to run and show calculations inside this component</p>
            <p> Each input field is separate from one another and logic is handled by if statments for each operatos</p>
            <p> Nothing can be passed to the another component, everything lives and dies here</p>
            <li> Global input and storage calculator</li>
            <p> Global Calculator on the other hand sends its input and result to the Global STORAGE via React-Redux library</p>
            <p> Then Calculator Archives sees the change in Global state and renders new output based on the new changes</p>
            <p> This way only one component gets updated instead of entire page. There is also regular expression that keeps track of invalid inputs</p>
        </ul>

        <h3> Finally the navigation bar is using react-redux-ROUTER library to show how components could be manipulated inside this website</h3>

    </div>
  );
}


export default Home;