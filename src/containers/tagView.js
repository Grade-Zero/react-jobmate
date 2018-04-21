import React, {Component} from 'react';
import {connect} from 'react-redux';


class JobTypeView extends Component {

    render() {
      if (!this.props.tag) {
        return (<h4>Select a job type...</h4>);
      }
      return (
        <div>
            <h2>{this.props.tag.name}</h2>
        </div>
      );
    }
}

function mapStateToProps(state) {
  return {
    tag: state.activeJobType
  }
}

export default connect(mapStateToProps)(JobTypeView);
