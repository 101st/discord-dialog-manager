import { combineReducers } from 'redux';
import formsLoginReducer from './components/forms/login/reducers';
import addNotification from './components/notification/reducers';

export default combineReducers({
  formsLoginReducer: formsLoginReducer,
  addNotification: addNotification
});