import * as constants from './constants';

export const getCurrentUserGuilds = apiKey => {
  return {
    type: constants.GET_CURRENT_USER_GUILDS_REQUEST,
    apiKey
  }
}

export const getChannels = apiKey => {
  return {
    type: constants.GET_CHANNELS_REQUEST,
    apiKey
  }
}

export const searchGuildText = (apiKey, guildId, params) => {
  return {
    type: constants.SEARCH_GUILD_TEXT_REQUEST,
    apiKey, guildId, params
  }
}

export const getUser = (apiKey, userId) => {
  return {
    type: constants.GET_USER_REQUEST,
    apiKey, userId
  }
}

export const getMe = apiKey => {
  return {
    type: constants.GET_ME_REQUEST,
    apiKey
  }
}