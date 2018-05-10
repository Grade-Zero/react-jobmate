import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import * as jobsReducer from './jobsReducer';

const rootReducer = combineReducers({
  jobs: jobsReducer.jobReducer, 
  routing: routerReducer
});

export default rootReducer;
