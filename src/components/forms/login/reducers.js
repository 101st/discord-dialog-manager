import { fromJS } from 'immutable';
import * as constants from './constants';

const initialState = fromJS({
  apiKey: ''
});

export default (state = initialState, action) => {
  switch (action.type) {

    case constants.SET_API_KEY_REQUEST:
      return state;
    case constants.SET_API_KEY_SACCESS:
      return state.set('apiKey', action.apiKey);
    case constants.SET_API_KEY_ERROR:
      return state;

    case constants.DELETE_API_KEY_REQUEST:
      return state;
    case constants.DELETE_API_KEY_SACCESS:
      return state.set('apiKey', '');
    case constants.DELETE_API_KEY_ERROR:
      return state;

    default:
      return state;
  }
};