import React, { Component } from 'react';
import { BrowserRouter as Router , Link , Route} from 'react-router-dom'
import Home from './Component/Home'
//import Input from './Component/Input'
import TodoInput from './Component/TodoInput'
import Login from './Component/Login'
import Signup from './Component/Signup'

class App extends Component {

  render() {
    return (
      <Router>
        <div>
       <Route exact path="/" component={Home}/>
       <Route path="/input" component={TodoInput}/>
       <Route path="/signup" component={Signup}/>
       <Route path="/login" component={Login}/>
       </div>
     </Router>
      
    );
  }
}

export default App;
