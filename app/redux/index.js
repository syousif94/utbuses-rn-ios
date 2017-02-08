import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, autoRehydrate } from 'redux-persist';
import { AsyncStorage } from 'react-native';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from 'reducers';

let finalCreateStore;
if (process.env.NODE_ENV !== 'production') {
  finalCreateStore = compose(
    applyMiddleware(thunk),
    applyMiddleware(createLogger()),
    autoRehydrate()
  )(createStore);
}
else {
  finalCreateStore = compose(
    applyMiddleware(thunk),
    autoRehydrate()
  )(createStore);
}

export default function configureStore() {
  const InitialState = {};
  const store = finalCreateStore(rootReducer, InitialState);
  persistStore(store, {
    whitelist: ['permissions', 'routes'],
    storage: AsyncStorage,
  })
  return store;
}
