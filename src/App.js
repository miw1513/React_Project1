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
    numberlist(number){
      const numbers = number;
      const listItems = numbers.map((number1) => <li key={number1.toString()}>
        {number1}
        </li>
        )
        return listItems
    }

  render() {
    let {todoItems} = this.state
    const number = [1,2,3,4,5,6,7,8,9];
    
    return (
      
      <div>
        <Todolist items={todoItems}/>
        <TodoInput onAddTodo={this.addTodo}/>
        <h1>{this.numberlist(number)}</h1>
      </div>
    );
  }
}

export default App;
