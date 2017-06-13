import React, { Component } from 'react';
import Header from "./header"
import Footer from "./Footer"

class App extends Component {
  render() {
    return (
      <div>
      <Header currentUser="Rittiphon" Loggin={true}/>
      
      <div>Hello</div>
      <Footer/>
      </div>
    );
  }
}

export default App;
