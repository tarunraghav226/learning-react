import React from 'react';

const Person = (props) => (
    <div >
        <h1 onClick={props.click} >My name is {props.name} and my age is {props.age}.</h1>
        <input type="text" onChange={props.change} value={props.name} /> 
    </div>
);

export default Person;