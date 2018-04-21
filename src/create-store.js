import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from './reducers/reducers';

const finalCreateStore = () => createStore(rootReducer, applyMiddleware(thunk));

export default finalCreateStore;
