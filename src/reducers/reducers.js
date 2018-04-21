import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import JobData from '../components/data';
import JobListReducer from '../components/jobList/reducers';
import JobTypeReducer from '../components/jobSide/reducers';

const rootReducer = combineReducers({
  jobs: JobData,
  activeJob: JobListReducer,
  tags: JobData,
  activeJobType: JobTypeReducer
});

export default rootReducer;
