import { combineReducers } from 'redux';

import init from './init';

function onboarded(state = init.user.onboarded, action = {}) {
  return state;
}

function locationAccess(state = init.user.locationAccess, action = {}) {
  return state;
}

function notifications(state = init.user.notifications, action = {}) {
  return state;
}

export default combineReducers({
  onboarded,
  locationAccess,
  notifications,
});
