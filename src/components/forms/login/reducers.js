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
      console.log(action)
      return state.set('apiKey', action.apiKey);
    case constants.SET_API_KEY_ERROR:
      console.log(action);
      return state;

    default:
      return state;
  }
};