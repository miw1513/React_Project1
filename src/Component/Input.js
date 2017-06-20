import React, { Component } from 'react';
import TodoInput from './Component/TodoInput';
import Todolist from './Component/Todolist';

//   constructor(props){
//     super(props)
//      this.state= {
//        todoItems: []
//     }
//     this.addTodo = this.addTodo.bind(this)
//  }
//     addTodo(newTodo){
//       this.setState ({
//         todoItems: this.state.todoItems.concat([newTodo])
//      })
//     }

   class Input extends Component {
    render(){
         //let {todoItems} = this.state
        return(
             <div>
         {/*<Todolist items={todoItems}/>
        <TodoInput onAddTodo={this.addTodo}/>*/}
        This page Input
        
       </div>
        )
    }
}
export default Input