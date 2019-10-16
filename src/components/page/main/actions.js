import * as constants from './constants';

export const getCurrentUserGuilds = (apiKey) => {
  return {
    type: constants.GET_CURRENT_USER_GUILDS_REQUEST,
    apiKey: apiKey
  }
}

export const getChannels = (apiKey) => {
  return {
    type: constants.GET_CHANNELS_REQUEST,
    apiKey: apiKey
  }
}