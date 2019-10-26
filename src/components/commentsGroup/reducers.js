import { fromJS } from 'immutable';
import * as constants from './constants';

const initialState = fromJS({
  selectedGroupId: null
});

export default (state = initialState, action) => {
  switch (action.type) {

    case constants.SET_COMMENTS_GROUP_REQUEST:
      return state;
    case constants.SET_COMMENTS_GROUP_SACCESS:
      return state
        .set('selectedGroupId', action.id === state.get('selectedGroupId') ? null : action.id);
    case constants.SET_COMMENTS_GROUP_ERROR:
      return state;

    default:
      return state;
  }
};