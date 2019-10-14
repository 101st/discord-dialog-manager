import * as constants from './constants';

export const deleteApiKey = () => {
  return {
    type: constants.DELETE_API_KEY_REQUEST
  }
}