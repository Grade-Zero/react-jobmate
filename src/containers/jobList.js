import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectJob} from '../components/jobList/actions';
import {selectJobType} from '../components/jobSide/actions';

class JobList extends Component {

    createListItems() {
        return this.props.jobs.map((job) => {
          if (this.props.tag == null || job.tags[0].id == this.props.tag.id) {

            return (
              <li className="job" key={job.id} onClick={() => this.props.selectJob(job)}>
        				<h1>{job.title}</h1><span className="label green">{job.industry}</span>
        				<h3>Updated on {job.updated}</h3>
        				<p><span>{job.company}</span> <span>{job.tags[0].name}</span> <span>{job.value}</span></p>
              </li>
            );
          }
        });
    }

    render() {
      return (
        <ul>
          {this.createListItems()}
        </ul>
      );
    }

}

function mapStateToProps(state) {
    return {
        jobs: state.jobs.list,
        tag: state.activeJobType
    }
}

export default connect(mapStateToProps, dispatch => bindActionCreators({
    selectJob,
    selectJobType
}, dispatch))(JobList);
