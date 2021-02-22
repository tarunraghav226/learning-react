import React, {Component} from 'react';

import Person from './person';

class Descripton extends Component{

    state = {
        person:[
            {name:"Tarun", age:"21"},
            {name:"Arun", age:"22"},
            {name:"Viaks", age:"23"}
        ]
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

    render(){
        return(
            <div>
                <h1>Hi this is react app.</h1>
                <h3>This is really working.</h3>
                <button onClick={this.switchStateHandler}>Switch Names</button>
                <Person name={this.state.person[0].name} age={this.state.person[0].age} />
                <Person name={this.state.person[1].name} age={this.state.person[1].age} />
                <Person name={this.state.person[2].name} age={this.state.person[2].age} />
            </div>
        )
    }
}

export default Descripton;