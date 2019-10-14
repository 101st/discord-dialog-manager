import { createStore, applyMiddleware } from 'redux';
import rootReducer from './combineReducers';

export default function configureStore(initialState = {}) {
  return createStore(rootReducer, initialState, applyMiddleware());
}