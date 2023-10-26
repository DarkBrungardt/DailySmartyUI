import { combineReducers } from 'redux';

import { reducer as form } from 'redux-form';

import posts from './postsReducer'

const rootReducer = combineReducers({
  form
});

export default rootReducer;