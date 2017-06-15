import React, { Component } from 'react';
import Header from "./header"
import Footer from "./Footer"

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      currentTime : 0
    }
    this.clickfromapp = this.clickfromapp.bind(this)
  }

  clickfromapp(timing){
    this.setState({
      currentTime: timing
    })
  }
  render() {
    let {currentTime} = this.state
    return (
      
      <div>
      <Header currentUser="Rittiphon" Loggin={true}/> 
      
      
      <div>CurrentTime : {currentTime}</div>
      <Footer onTimerClick={this.clickfromapp} />
      </div>
    );
  }
}

export default App;
