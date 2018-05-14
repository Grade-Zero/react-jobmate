import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import classNames from 'classnames';

import {clearFilters, selectJobType, selectIndustryType} from '../../actions/actions';

import './style.css';

class JobListFilter extends Component {
  constructor() {
    super();
    this.state = {
      jobTypeVisible: false,
      industryFilterVisible: false,
      typeSelected: false,
      industrySelected: false,
      search: ""
    }
    this.onSearch = this.onSearch.bind(this);
  }

  componentDidUpdate() {
    // console.log(this.state.search);
  }

  componentWillReceiveProps(nextProps) {
    console.log("will receive props");
      this.setState({updated: nextProps.updated});
  }

  jobTypeSelect(e, tag) {
    e.stopPropagation();
    this.props.selectJobType(tag);
  }
  industryTypeSelect(e, tag) {
    e.stopPropagation();
    this.props.selectIndustryType(tag);
  }

  jobFilterToggle() {
    this.setState(prevState => ({
      jobTypeVisible: !prevState.jobTypeVisible
    }));
  }
  industryFilterToggle() {
    this.setState(prevState => ({
      industryFilterVisible: !prevState.industryFilterVisible
    }));
  }

  getJobTypeTags() {
    if (this.props.jobTypes.length > 0) {
      return this.props.jobTypes.map((tag) => {
        // return <li key={tag.id} onClick={(e) => this.jobTypeSelect(e, tag)}>{tag.name}</li>
        // {typeClass}
        return <li key={tag.id} className={tag.selected ? 'selected' : ''} onClick={(e) => this.checkTagSelection(e, tag)}>{tag.name}</li>
      });
    }
  }
  checkTagSelection(e, tag) {
    // Component doesn't render without this
    this.setState(prevState => ({}));
    return this.jobTypeSelect(e, tag);
  }

  getIndustryTags() {
    if (this.props.industries.length > 0) {
      return this.props.industries.map((tag) => {
        return <li key={tag.id} className={tag.selected ? 'selected' : ''} onClick={(e) => this.checkIndustrySelection(e, tag)}>{tag.name}</li>
        // return <li key={tag.id} className={tag.selected ? 'selected' : ''} onClick={(e) => this.industryTypeSelect(e, tag)}>{tag.name}</li>
      });
    }
  }
  checkIndustrySelection(e, tag) {
    this.setState(prevState => ({}));
    return this.industryTypeSelect(e, tag);
  }
  // onSearch(e) {
  //   console.log(e);
  //   console.log(e.type)
  //   let char = e.key;
  //   this.setState(prevState => ({
  //     search: prevState.search += char
  //   }));
  // }

  onSearch(e) {
    let ev = e.target.value;
    this.setState({
      search: ev
    });
  }


  clearFilters() {
    this.setState(prevState => ({}));
    this.props.clearFilters();
  }

  render() {

    let jobFilterClass = classNames({
      'filter-options': !this.state.jobTypeVisible,
      'filter-options visible': this.state.jobTypeVisible
    });
    let industryFilterClass = classNames({
      'filter-options': !this.state.industryFilterVisible,
      'filter-options visible': this.state.industryFilterVisible
    });

    return (
      <ul className="filter-group">
        <li className="search">
          <input type="text" placeholder="Search for a listing" onKeyDown={(e) => this.onSearch(e)} tabIndex="0" />
        </li>

        <li className="show-filter" onClick={() => this.jobFilterToggle()}>
          Job Type
          <ul className={jobFilterClass}>
            {this.getJobTypeTags()}
          </ul>
        </li>

        <li className="show-filter" onClick={() => this.industryFilterToggle()}>
          Industry
          <ul className={industryFilterClass}>
            {this.getIndustryTags()}
          </ul>
        </li>

        <li className="reset" onClick={() => this.clearFilters()}>Reset</li>
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    jobTypes: state.jobs.types,
    industries: state.jobs.industries,
    search: state.jobs.search
  }
}

export default connect(mapStateToProps, dispatch => bindActionCreators({
  clearFilters,
  selectJobType,
  selectIndustryType
}, dispatch))(JobListFilter);
