import React, { Component } from 'react';
import TodoInput from './TodoInput';
import Todolist from './Todolist';

class App extends Component {
  constructor(props){
    super(props)
    this.state= {
      todoItems: []
    }
    this.addTodo = this.addTodo.bind(this)
  }
    addTodo(newTodo){
      this.setState ({
        todoItems: this.state.todoItems.concat([newTodo])
      })
    }

  render() {
    let {todoItems} = this.state
    return (
      
      <div>
        <Todolist items={todoItems}/>
        <TodoInput onAddTodo={this.addTodo}/>
        
      </div>
    );
  }
}

export default App;
