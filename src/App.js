import React, { Component } from 'react';
import JobList from './containers/jobList';
import JobView from './containers/jobView';
import JobSide from './containers/jobSide';
import logo from './logo.svg';
import './App.css';
import {Provider} from 'react-redux';
import createStore from './create-store';

const store = createStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <div className="listings">
            <div className="col">
  			  <div className="list">
                <JobList />
              </div>
              <div className="filters">
                <JobView />
                <JobSide />
              </div>
            </div>
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
