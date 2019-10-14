import * as constants from './constants';

export const setApiKey = (apiKey) => {
  return {
    type: constants.SET_API_KEY_REQUEST,
    apiKey: apiKey
  }
}