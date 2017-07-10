import React, { Component } from 'react';
import { BrowserRouter as Router , Link , Route} from 'react-router-dom';
import Home from './Component/Home'
//import Input from './Component/Input'
import Login from './Component/Login'
import Signup from './Component/Signup'
import {createStore,combineReducers} from 'redux';


const initialStateEmployee = {
    result:15000,
    value:[]
}

const initialStateUser = {
    name : "Kong",
    age :15
}


const EmployeeReducer = (state=initialStateEmployee,action) => {
    switch (action.type) {
        case 'ADD':
                state = {
                   result: state.result+=action.payload,
                   value: [...state.value,action.payload]
                }
                console.log(...state.value,action.payload)
            break;
        case 'SUBTRACT' :
                state = {
                    result: state.result-=action.payload,
                    value:[...state.value,action.payload]
                }
                console.log(...state.value)
            break;
        
    }
    return state;
}

const UserReducer = (state=initialStateUser,action) => {
    switch (action.type) {
       case 'setName' :
            state = {
                ...state,
                name : action.payload,
            
            }
            break;
        case 'setAge' :
        state = {
            ...state,
            age : action.payload
        }
        
        break;
        
    }
    return state;
}

const store = createStore(combineReducers({UserReducer,EmployeeReducer}));
    store.subscribe(()=>{
        console.log('Update Result : ',store.getState())
    })
    store.dispatch({
        type:'ADD',
        payload:10000
    })
    store.dispatch({
        type:'SUBTRACT',
        payload:5000
    })
    store.dispatch({
        type:'setAge',
        payload:'eiei'
    })
 

class App extends Component {

  render() {
    return (
      <Router>
        <div>
       <Route exact path="/" component={Home}/>
       
       
       <Route path="/login" component={Login}/>
       </div>
     </Router>
      
    );
  }
}

export default App;
