import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Anime from "react-anime";
import io from "socket.io-client";
import header from './parts/Header'
import Header from './parts/Header';
import { Router, Route, Switch } from "react-router";
import { Link } from "react-router-dom";
import Audience from './Audience';

var RouteHandler = Router.RouteHandler;



class App extends Component {
 
  constructor(props){
    super(props);
    this.state = {
      status: 'disconnected',
      title: 'Untitled Presentation!'
    }
    this.connect = this.connect.bind(this)
    this.disconnect = this.disconnect.bind(this)
    this.welcome = this.welcome.bind(this);
  }

  componentWillMount(){
    this.socket = io("http://localhost:5000");
    this.socket.on('connect',this.connect)
    this.socket.on('disconnect', this.disconnect)
    this.socket.on('welcome',this.welcome)

  }
  connect(){
    this.setState({
      status: 'connected'
    })
  }
  disconnect() {
    this.setState({
      status: 'disconnected'
    })
  }
  welcome(serverState){
    this.setState({
      title: serverState.title
    })
  }
  render() {
    return <div className="App-intro">
        <Header title={this.state.title} status={this.state.status} />

        <p>
          <Link to="/board">Home</Link>
        </p>

        <p>
          <Link to="/contact">Contact</Link>
        </p>

        <p>
          <Link to="/notexist">Not Exist</Link>
        </p>
        <Audience title={this.props.title}/>
        {this.props.children}
      </div>
  }
}

export default App;