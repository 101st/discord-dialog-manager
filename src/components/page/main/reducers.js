import { fromJS } from 'immutable';
import * as constants from './constants';

const initialState = fromJS({
  apiKey: ''
});

export default (state = initialState, action) => {
  switch (action.type) {

    case constants.SET_API_KEY_REQUEST:
      return state.set('apiKey', action.apiKey);

    default:
      return state;
  }
};