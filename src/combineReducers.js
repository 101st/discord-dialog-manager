import { combineReducers } from 'redux';
import formsLoginReducer from './components/forms/login/reducers';
import addNotificationReducer from './components/notification/reducers';
import mainPageReducer from './components/page/main/reducers';
import commentsGroupReducer from './components/commentsGroup/reducers';

export default combineReducers({
  formsLoginReducer: formsLoginReducer,
  addNotificationReducer: addNotificationReducer,
  mainPageReducer: mainPageReducer,
  commentsGroupReducer: commentsGroupReducer
});