import React, {Component} from 'react';
import '../App.css'
import Person from './person';

class Descripton extends Component{

    state = {
        person:[
            {id:1,name:"Tarun", age:"21"},
            {id:2,name:"Arun", age:"22"},
            {id:3,name:"Viaks", age:"23"}
        ],
        showPersons : false
    }

    switchStateHandler = ()=>{
        this.setState({
            person:[
                {id:1,name:"Tarun", age:"21"},
                {id:2,name:"Jaunty", age:"42"},
                {id:3,name:"Viaks", age:"23"}
            ]
        });
    }

    changedHandler = (event, id) => {
        const personIndex = this.state.person.findIndex(p=>{
            return p.id === id;
        });

        const person = {...this.state.person[personIndex]};

        person.name = event.target.value;

        const persons = [...this.state.person];
        persons[personIndex] = person;

        this.setState({
            person:persons
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
        const style ={
            backgroundColor : 'green',
            padding : '10px',
            color : 'white',
            border : 'none',
            borderRadius : '5px',
            outline : 'none'
        };

        let persons = null;
        if( this.state.showPersons ){
            persons = (
            <>
                <button onClick={this.switchStateHandler}>Switch Names</button>
                {
                    this.state.person.map((person, index) => {
                    return <><Person 
                                change={(event)=>this.changedHandler(event, person.id)}
                                name={person.name} 
                                age={person.age}
                                click={()=>this.deletePerson(index)}
                                key={person.id}/>
                            <hr/>
                            </>
                    })
                }
            </>)
            style.backgroundColor = 'red';
        }

        let classes = [];

        if(this.state.person.length <= 2) classes.push('red');
        if(this.state.person.length <= 1) classes.push('bold');
        
        return(
            <div>
                <h1 >Hi this is react app.</h1>
                <h3 className={classes.join(' ')}>This is really working.</h3>
                {console.log(classes.join(' '))}
                <button style={style} onClick={this.togglePersons}>Toggle</button> <br/>
                {persons}
            </div>
        )
    }
}

export default Descripton;