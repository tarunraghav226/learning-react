import React ,{Component} from 'react';
import Radium from 'radium';

class Person extends Component{
    style = {
        '@media (max-width:500px)':{
            width:'80%'
        }
    }
    render(){
        return(
            <div style={this.style}>
                <h1 onClick={this.props.click} >My name is {this.props.name} and my age is {this.props.age}.</h1>
                <input type="text" onChange={this.props.change} value={this.props.name} /> 
            </div>
        )
    }
}

export default Radium(Person);