import React, { Component } from 'react';
import { BrowserRouter as Router , Link , Route} from 'react-router-dom';
import Home from './Component/Home'
//import Input from './Component/Input'
import Login from './Component/Login'
import Signup from './Component/Signup'
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
        payload:10000
    })
    store.dispatch({
        type:'SUBTRACT',
        payload:15000
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
