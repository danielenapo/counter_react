import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
  	super();
    this.state = {
    	counter: 0
    };

  }
  
  render() {
    return (
      <div>
      <h1>counter: {this.state.counter}</h1>
      <button onClick={()=> this.setState({counter: this.state.counter+1})}>push</button>
      <button onClick={()=> this.setState({counter: this.state.counter-1})}>pull</button>
      </div>
    )
  }
}



export default App;
