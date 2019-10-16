import { fromJS } from 'immutable';
import * as constants from './constants';

const initialState = fromJS({
  guilds: [],
  guildsCount: 0
});

export default (state = initialState, action) => {
  switch (action.type) {

    case constants.GET_CURRENT_USER_GUILDS_REQUEST:
      return state;
    case constants.GET_CURRENT_USER_GUILDS_SACCESS:
      return state
        .set('guilds', action.guilds)
        .set('guildsCount', action.guilds.length);
    case constants.GET_CURRENT_USER_GUILDS_ERROR:
      return state;

    default:
      return state;
  }
};