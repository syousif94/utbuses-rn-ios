import { combineReducers } from 'redux';

import user from './user';
import routes from './routes';
import ui from './ui';

export default combineReducers({
  user,
  routes,
  ui,
});
