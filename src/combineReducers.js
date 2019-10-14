import { combineReducers } from 'redux';
import formsLoginReducer from './components/forms/login/reducers';

export default combineReducers({
  formsLoginReducer: formsLoginReducer
});