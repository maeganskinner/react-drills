import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;

class Login extends Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
    this.handleLogin = this.handleLogin.bind(this);
  }
  handleUsernameChange(name) {
    this.setState({username: name});
  }
  handlePasswordChange() {
    this.setState({password:pass});
  }
  handleLogin() {
    alert(Uername: {this.state.username} Password: {this.state.password});
  }
  render () {
    return (
      <div>
        <input onChange={event => this.handleUsernameChange(event.target.value)} type='text' />
        <input onChange={event => this.handlePasswordChange(event.target.value)} type='text' />
        <button onClick={this.handleLogin}>Login</button>
      </div>
    )
  }
}
