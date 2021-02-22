import React ,{Component} from 'react';

class Person extends Component{
    render(){
        return(
            <div>
                <h1>My name is {this.props.name} and my age is {this.props.age}.</h1>
                <input type="text" onChange={this.props.change} value={this.props.name} /> 
            </div>
        )
    }
}

export default Person;