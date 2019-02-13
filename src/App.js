import React, { Component } from "react";
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';



class App extends Component {
  constructor() {
    super(); //Allows you to import methods from other components
    this.state = {    //holder of things
      list: [
        {task:"code"}
      ]  // empty array to hold list items
    } 
  }

  addItem = item => {
    //setState updates whatever you have on state
    this.setState({
      list: [...this.state.list, item]//  spread operator[...this.state.copySomethingFromState, addThis]
    })
  }

  render() {  //what will be shown on screen
    return ( 
      <div>
        <h1>REACT TO DO</h1>
        {/* //passing in as props */}
        <TodoForm addItem={this.addItem}/> 
        <TodoList list={this.state.list}/>
        
      </div>
     );
  }
}
 
export default App;