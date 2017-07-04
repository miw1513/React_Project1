import React, { Component } from 'react';
import { BrowserRouter as Router , Link , Route} from 'react-router-dom';
import Home from './Component/Home'
//import Input from './Component/Input'
import Login from './Component/Login'
import Signup from './Component/Signup'
import {createStore} from 'redux';


const initialState = {
    result:15000,
    value:[]
}


const reducer = (state=initialState,action) => {
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
const store = createStore(reducer);
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
