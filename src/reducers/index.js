import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import goalReducer from './goal_reducer';

const rootReducer = combineReducers({
  goal: goalReducer
});

const store = createStore(rootReducer, {}, applyMiddleware(thunk));

export default store;
