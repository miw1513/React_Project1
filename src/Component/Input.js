import React, { Component } from 'react';
import TodoInput from './Component/TodoInput';
import Todolist from './Component/Todolist';
import {createStore} from 'redux';



const reducer = (state,action) => {
    switch (action.type) {
        case 'ADD':
            state+= action.payload;
            break;
        case 'SUBTRACT' :
            state-= action.payload;
            break;
        
    }
    return state;
}
const store = createStore(reducer,15000);
    store.subscribe(()=>{
        console.log('Update Result : ',store.getState())
    })
    store.dispatch({
        type:'ADD',
        payload:500
    })



   class Input extends Component {
    render(){
         //let {todoItems} = this.state
        return(
             <div>
         
        This page Input
        
       </div>
        )
    }
}
export default Input