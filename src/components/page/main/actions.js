import * as constants from './constants';

export const getCurrentUserGuilds = (apiKey) => {
  return {
    type: constants.GET_CURRENT_USER_GUILDS_REQUEST,
    apiKey: apiKey
  }
}