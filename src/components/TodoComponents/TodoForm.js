import React, { Component } from "react";

class TodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            task: ''
         }
    }

    //Change handler for form input
    handleInputChange = e => {
        this.setState({ [e.target.name]: e.target.value }); //targeted event

    };

    handleSubmit = e => {
        e.preventDefault(); //prevents screen re-fresh 
        this.props.addItem({
            task: this.state.task
        })
        this.setState({ // clears form - removes text 
            task: ''
        })

    }

    render() { 
        return ( 
            <form onSubmit={this.handleSubmit}>
                <input 
                    onChange={this.handleInputChange}
                    placeHolder = "To Do"
                    value = {this.state.task}
                    name = 'task' 
                />
                <button type='sumit'>Add Todo</button>
            </form>
         );
    }
}
 
export default TodoForm;