import { fromJS } from 'immutable';
import * as constants from './constants';

const initialState = fromJS({
  guilds: [],
  guildsCount: 0,
  channels: [],
  channelsCount: 0,
  messages: [],
  me: {}
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


    case constants.GET_CHANNELS_REQUEST:
      return state;
    case constants.GET_CHANNELS_SACCESS:
      return state
        .set('channels', action.channels)
        .set('channelsCount', action.channels.length);
    case constants.GET_CHANNELS_ERROR:
      return state;

    case constants.SEARCH_GUILD_TEXT_REQUEST:
      return state;
    case constants.SEARCH_GUILD_TEXT_SACCESS:
      return state
        .set('messages', action.messages.data);
    case constants.SEARCH_GUILD_TEXT_ERROR:
      return state;

    case constants.GET_USER_REQUEST:
      return state;
    case constants.GET_USER_SACCESS:
      return state
        .set('user', action.user);
    case constants.GET_USER_ERROR:
      return state;

    case constants.GET_ME_REQUEST:
      return state;
    case constants.GET_ME_SACCESS:
      return state
        .set('me', action.me.data);
    case constants.GET_ME_ERROR:
      return state;

    default:
      return state;
  }
};