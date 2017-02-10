import { combineReducers } from 'redux';

import init from './init';

function route(state = init.ui.route, action = {}) {
  return state;
}

function direction(state = init.ui.direction, action = {}) {
  return state;
}

function selectedStop(state = init.ui.selectedStop, action = {}) {
  return state;
}

export default combineReducers({
  route,
  direction,
  selectedStop,
});
