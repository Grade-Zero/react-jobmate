import React, {Component} from 'react';
import {connect} from 'react-redux';


class JobView extends Component {

    render() {
      if (!this.props.job) {
        return (<h4>Select a job...</h4>);
      }
      return (
        <div>
          <h2>{this.props.job.title} - {this.props.job.industry.name}</h2>
        </div>
      );
    }
}

function mapStateToProps(state) {
  return {
    job: state.selectedJob
  }
}

export default connect(mapStateToProps)(JobView);
