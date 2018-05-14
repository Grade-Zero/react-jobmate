import React, { Component } from "react";
import { Provider } from "react-redux";

import createStore from "./create-store";
import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom';

// import JobView from "./containers/jobView";

import JobList from "./components/jobList";
import JobListFilter from "./components/jobListFilter";

const store = createStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">

          <header className="header">
            <div className="col">
              <div className="logo">
                <h1><span>JM</span>Job Mate</h1>
              </div>
            </div>
          </header>

          <div className="message">
      			<div className="col">
      				<p>Companies in this list have offices in Brisbane, and job offers on their website. This is a community curated list, anyone can <a href="">submit a company</a> for review.</p>
      			</div>
      		</div>

          <div className="listings">
            <div className="col">
              <div className="list">
                <JobList />
              </div>
              <div className="filters">
                <JobListFilter />
              </div>
            </div>
          </div>

        </div>
      </Provider>
    );
  }
}

export default App;
