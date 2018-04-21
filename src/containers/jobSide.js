import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {selectJobType} from '../components/jobSide/actions';
import JobTypeView from './tagView';

class JobSide extends Component {

    constructor() {
      super();
      this.state = {
        jobTypeVisible: false
      }
    }

    render() {

      return (
        <ul className="filter-group">
          <li className="search">
            <input type="text" placeholder="Search for a listing" />
          </li>
          <li className="show-filter" onClick={() => this.filterClick()}>
            Job Type
              <ul className="filter-options visible">
                {this.props.tags.map((tag) => {
                    return this.state.jobTypeVisible
                      ? <li key={tag.id} onClick={(e) => this.jobTypeClick(e, tag)}>{tag.name}</li>
                      : null
                })}
              </ul>
          </li>
          <li className="show-filter">
            Industry
          </li>
          <li className="reset" onClick={() => this.props.selectJobType(null)}>Reset</li>
            <li className="show-filter">
              <JobTypeView />
          </li>
        </ul>
      );
    }

    jobTypeClick(e, tag) {
      e.stopPropagation();
      this.props.selectJobType(tag);
    }

    filterClick() {
      this.setState(prevState => ({ jobTypeVisible: !prevState.jobTypeVisible }));
    }
}

function mapStateToProps(state) {
    return {
        tags: state.jobs.tags
    }
}

export default connect(mapStateToProps, dispatch => bindActionCreators({
    selectJobType
}, dispatch))(JobSide);
