import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducers from './combineReducers';
import formsLoginSagas from './components/forms/login/sagas';
import addNotification from './components/notification/sagas';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducers,
  {},
  applyMiddleware(sagaMiddleware)
);

// then run the saga
[
  ...formsLoginSagas,
  ...addNotification
].map(sagaMiddleware.run);

export default function configureStore() {
  return store;
}

