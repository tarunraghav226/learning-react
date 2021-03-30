import React from 'react';
import Person from './person/person';

const Persons = (props) => props.persons.map((person, index) => {
    return <Person click={()=>props.click(index)}
                name={person.name}
                age={person.age}
                change={(event) => props.change(event, person.id)}
                key={person.id}/>;
});

export default Persons;