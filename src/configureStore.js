import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducers from './combineReducers';
import formsLoginSagas from './components/forms/login/sagas';
import addNotificationSagas from './components/notification/sagas';
import mainPageSagas from './components/page/main/sagas';
import commentsGroupSagas from './components/commentsGroup/sagas';

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
  ...addNotificationSagas,
  ...mainPageSagas,
  ...commentsGroupSagas
].map(sagaMiddleware.run);

export default function configureStore() {
  return store;
}

