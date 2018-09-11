import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import io from "socket.io-client";

class App extends Component {
  state = {
    data: null
  };

  componentWillMount(){
    this.socket = io("http://localhost:5000");
    this.socket.on('connect',this.connect)
  }
  connect(){
    alert("Connected")
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        // Render the newly fetched data inside of this.state.data 
        <p className="App-intro">{this.state.data}</p>
      </div>
    );
  }
}

export default App;