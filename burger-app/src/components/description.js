import React, {Component} from 'react';
import '../App.css'
import Person from './person';

class Descripton extends Component{

    state = {
        person:[
            {name:"Tarun", age:"21"},
            {name:"Arun", age:"22"},
            {name:"Viaks", age:"23"}
        ],
        showPersons : false
    }

    switchStateHandler = ()=>{
        this.setState({
            person:[
                {name:"Tarun", age:"21"},
                {name:"Jaunty", age:"42"},
                {name:"Viaks", age:"23"}
            ]
        });
    }

    changedHandler = (event) => {
        this.setState({
            person:[
                {name:"Tarun", age:"21"},
                {name:event.target.value, age:"42"},
                {name:"Viaks", age:"23"}
            ]
        })
    }

    togglePersons = ()=> {
        this.setState({
            showPersons: !this.state.showPersons
        });
    }

    deletePerson = (index) => {
        let newPerson = this.state.person;
        newPerson.splice(index, 1);
        this.setState({person:newPerson})
    }

    render(){
        let persons = null;
        if( this.state.showPersons ){
            persons = (
            <>
                <button onClick={this.switchStateHandler}>Switch Names</button>
                {
                    this.state.person.map((person, index) => {
                    return <><Person 
                                change={()=>alert("test")}
                                name={person.name} 
                                age={person.age}
                                click={()=>this.deletePerson(index)}/>
                            <hr/>
                            </>
                    })
                }
            </>)
        }
        
        return(
            <div>
                <h1>Hi this is react app.</h1>
                <h3>This is really working.</h3>
                <button onClick={this.togglePersons}>Toggle</button> <br/>
                {persons}
            </div>
        )
    }
}

export default Descripton;