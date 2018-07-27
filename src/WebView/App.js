import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    const {login} = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

function mapStateToProps(login, TOKEN) {
  return {
    isLogin: login, //state
    login: TOKEN,
  }
}
const AppConnect = connect(
  mapStateToProps
)(App);

export default AppConnect;
