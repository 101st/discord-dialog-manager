const axios = require('axios');
const querystring = require('querystring');
const BASE_URL = 'https://discordapp.com/api/v6'

async function getCurrentUserGuilds(apiKey) {
  try {

    return axios({
      method: 'get',
      url: `${BASE_URL}/users/@me/guilds`,
      headers: {
        authorization: apiKey
      }
    });

  } catch (error) {
    return error;
  }
}

async function deleteMessage(apiKey, channel = 0, msgId = 0) {
  try {

    return axios({
      method: 'delete',
      timeout: 5000,
      url: `${BASE_URL}/channels/${channel}/messages/${msgId}`,
      headers: {
        authorization: apiKey
      }
    });

  } catch (error) {
    return error;
  }
}

async function searchText(apiKey, guild, params) {

  return axios({
    method: 'get',
    url: `${BASE_URL}/guilds/${guild}/messages/search?${querystring.stringify(params)}`,
    headers: {
      authorization: apiKey
    }
  });

}

export default {
  getCurrentUserGuilds,
  deleteMessage,
  searchText
}