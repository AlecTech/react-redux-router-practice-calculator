import React from 'react';
import {connect} from 'react-redux';

function CalculatorList (props)
{
    return (
        <>
            <h2>Calculator List:</h2>
            <ul>
                {/* task is comming from REDUCER (which inturn looks inside STORE), calcItem is declair right inside map and dies inside map 
                So each new task object has property of task which is content. This map will access our GLOBAL STATE and reproduce whats inside*/}
                {props.CalculatorOutput.map((calcItem, index) => <li key={index}>{calcItem.task} </li>)}
            </ul>
        </>
    )
}
// ({}) this is work around return function. CalculatorOutput is a property here (props)
//This connect make our CalculatorOutput which is inside STORE available via props
// there should be another way to do it
export default connect (state => ({CalculatorOutput: state}))(CalculatorList);