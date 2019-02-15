import React, { Component } from "react";
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';



class App extends Component {
  constructor() {
    super(); //Allows you to import methods from other components
    this.state = {    //holder of things
      list: [
        {
          task:"code",
          completed: false,
          id: Date.now() //unique identifier, for now its just the date and time
        }
      ]  // empty array to hold list items
    } 
  }

  addItem = item => {
    //setState updates whatever you have on state
    this.setState({
      list: [...this.state.list, item] //spread operator[...this.state.copySomethingFromState, addThis]
    })
  }

  // on this page so it can be passed down as a prop
  toggleItem = itemId => {
    this.setState({
      list: this.state.list.map(task => itemId === task.id ? {...task, completed: !task.completed } : task)
   
    })
      console.log(itemId); //to make sure its working
  }
  
  clearCompleted = () => {
    this.setState({
    list: this.state.list.filter(task => task.completed !== true )
  })
}

  render() {  //what will be shown on screen
    return ( 
      <div>
        <h1>REACT TO DO</h1>
        {/* //passing in as props */}
        <TodoForm addItem={this.addItem}/> 
        <TodoList list={this.state.list} toggleItem={this.toggleItem} />
        <button onClick={this.clearCompleted}>CLEAR</button>
      </div>
     );
  }
}
 
export default App;