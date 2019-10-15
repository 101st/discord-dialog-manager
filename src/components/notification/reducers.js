import { fromJS } from 'immutable';
import * as constants from './constants';

const initialState = fromJS({
  notifications: []
});

export default (state = initialState, action) => {
  switch (action.type) {

    case constants.ADD_NOTIFICATION_REQUEST:
      return state;
    case constants.ADD_NOTIFICATION_SACCESS:
      return state
        .updateIn(['notifications'], arr => arr.push(action.notification));
    case constants.ADD_NOTIFICATION_ERROR:
      return state;

    case constants.REMOVE_NOTIFICATION_REQUEST:
      return state;
    case constants.REMOVE_NOTIFICATION_SUCCESS:
      return state
        .updateIn(['notifications'], arr => arr.filter(notification => notification.id !== action.notificationId));

    default:
      return state;
  }
};