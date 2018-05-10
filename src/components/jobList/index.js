import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectJob} from '../../actions/actions';

import './style.css';

class JobList extends Component {

  componentDidUpdate() {
    console.log(this.props.typesSelected);
  }

  createListItems() {
    return this.props.jobs.map((job) => {
      const labelClass = "label " + job.industry.labelColor;
      this.checkType(job);
      if (job.display) {
        return (
          <li className="job" key={job.id} onClick={() => this.props.selectJob(job)}>
            <h1>{job.title}</h1>
            <span className={labelClass}>{job.industry.name}</span>
            <h3>Updated on {job.updated}</h3>
            <p>
              <span>{job.company}</span>
              <span>{job.tags[0].name}</span>
              <span>{job.value}</span>
            </p>
          </li>
        );
      } else {
        return false;
      }
    });
  }

  checkType(job) {
    let typeMatch = false;
    let typeValid = false;

    // console.log("search: " + this.props.search);
      for (let type of this.props.typesSelected) {
        typeValid = true;
        job.display = false;
        if (type.id === job.tags[0].id) {
          job.display = true;
          typeMatch = true;
          break;
        }
      }

      // if (job.display) {
        for (let industry of this.props.industriesSelected) {
          job.display = false;
          if (industry.id === job.industry.id) {
            if (!typeValid || typeMatch)
              job.display = true;
            break;
          }
        }
      // }
  }

  checkIndustry(job) {

  }

  render() {
    console.log("jobList render");
    return (<ul>{this.createListItems()}</ul>);
  }

}

function mapStateToProps(state) {
  console.log("map state to props");
  return {
    jobs: state.jobs.list,
    typesSelected: state.jobs.typesSelected,
    industriesSelected: state.jobs.industriesSelected,
    search: state.jobs.search
  }
}

export default connect(mapStateToProps, dispatch => bindActionCreators({
  selectJob
}, dispatch))(JobList);
