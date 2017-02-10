import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, autoRehydrate } from 'redux-persist';
import { AsyncStorage } from 'react-native';
import immutableTransform from 'redux-persist-transform-immutable';
import createLogger from 'redux-logger';
import rootReducer from 'app/reducers';

let finalCreateStore;
if (process.env.NODE_ENV !== 'production') {
  finalCreateStore = compose(
    applyMiddleware(createLogger()),
    autoRehydrate()
  )(createStore);
}
else {
  finalCreateStore = compose(
    autoRehydrate()
  )(createStore);
}

export default function configureStore() {
  const InitialState = {};
  const store = finalCreateStore(rootReducer, InitialState);
  persistStore(store, {
    whitelist: ['user', 'routes'],
    storage: AsyncStorage,
    transforms: [immutableTransform({
      whitelist: ['routes'],
    })],
  });
  return store;
}
