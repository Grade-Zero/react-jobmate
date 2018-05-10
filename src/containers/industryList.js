import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {selectIndustry} from '../components/jobSide/actions';


class IndustryList extends Component {

  constructor() {
    super();
    this.state = {
      industryChecked: [],
      industryListVisible: false
    }

    console.log("industryChecked");
    console.log(this.state.industryChecked);
  }

  render() {
    console.log(this.props.jobs);
    console.log(this.props);
    return (
      this.props.jobs.map((job) => {
          return this.checkIndustry(job.industry)
          // return this.check(job.industry)
            ? <li key={job.id} onClick={(e) => this.industryClick(e, job.industry)}>{job.industry}</li>
            : null

          // return <li key={job.id} onClick={(e) => this.jobTypeClick(e, job)}>{job.industry}</li>
      })
      // <h1>Penis</h1>
    );
  }

  industryClick(e, industry) {
    e.stopPropagation();
    console.log("industryClick");
    console.log(industry);
    this.props.selectIndustry(industry);
  }

  check(industry) {
    return true;
  }

  checkIndustry(industry) {
    var ind = industry;
    var matched = false;
    this.state.industryChecked.map((indus) => {
      console.log("Map output");
      console.log(Object.keys(indus));
      var key = Object.keys(indus);
      // console.log(indus[key]);
      // console.log(ind);
      if (Object.keys(indus)[0] == ind) {
        console.log("A match!!");
        indus[key] = indus[key] + 1;
        matched = true;
        return true;
      }
      // if (this.state.industryChecked[ind] > 0) {
      //   console.log("This industry already exists in array");
      //   this.state.industryChecked[ind] = this.state.industryChecked[ind] + 1;
      //   return false;
      // } else {
      //   console.log("This industry was not found, add it an value of 1");
      //   this.state.industryChecked.push({[ind]: 1});
      //   console.log(this.state.industryChecked);
      //   return true;
      // }
    })

    if (!matched) {
      this.state.industryChecked.push({[ind]: 1});
      this.addIndustry([ind]);
      return true;
    }

    // Infinite loop
    // this.setState({
    //   industryChecked: [
    //     ...this.state.industryChecked, {
    //       name: industry.industry,
    //       count: 1
    //     }
    //   ]
    // });
  }

  addIndustry(industry) {
    var list = this.state.industryChecked;
    list.push({industry: 1});
    console.log(list);
    // this.setState({industryChecked.push({industry: 1})})
    // this.setState({industryChecked: list});
  }

  filterClick() {
    this.setState(prevState => ({ industryListVisible: !prevState.industryListVisible }));
  }
}

function mapStateToProps(state) {
  return {
    jobs: state.jobs.list,
    industryChecked: state.industryChecked,
    industries: [],
  }
}

// export default connect(mapStateToProps)(IndustryList);

export default connect(mapStateToProps, dispatch => bindActionCreators({
    selectIndustry
}, dispatch))(IndustryList);
