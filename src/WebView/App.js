import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import { connect } from 'react-redux';
import {gitHubCommits} from '../Graphql/github';
import ReactTable from 'react-table';

class App extends Component {
  render() {
    const {getUserCommits, commits} = this.props;
    const updatedCommits = commits.map((commit)=>{
        return <div className="Table-rows" key={commit.toString()}>{commit}</div>;
    });
    const columns = [{
      Header: 'Commit URLs',
      accessoe: 'commits'
    }]
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Assignment</h1>
        </header>
        <h3>Enter the Git username to get commits</h3>
        <input className="Input-container" id="userNameInput" placeholder="Enter Git Username"/><br/>
        <button className="Button-user-commit" onClick={getUserCommits}>Click to get user commits</button>
        {updatedCommits.length > 0 &&
          <table className="Table-commits">
            <th className="Table-header">Commit URLs</th>
            <tr>
              {updatedCommits}
            </tr>
          </table>
        }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    commits: state.gitHub.commits
  }
}

function mapDispatchToProps(dispatch){
  return {
    getUserCommits: function(){
      console.log(document.getElementById('userNameInput').value);
      dispatch(gitHubCommits(document.getElementById('userNameInput').value));
    }
  }
}

const AppConnect = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppConnect;
