import * as constants from './constants';

export const setCommentsGroup = (id) => {
  return {
    type: constants.SET_COMMENTS_GROUP_REQUEST,
    id
  }
}