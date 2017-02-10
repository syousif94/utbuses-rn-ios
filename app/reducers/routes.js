import Immutable from 'immutable';

import init from './init';

export default function routes(state = Immutable.Map(init.routes), action = {}) {
  return state;
}
