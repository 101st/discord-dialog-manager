import * as constants from './constants';

export const addNotification = (notification) => {
  return {
    type: constants.ADD_NOTIFICATION_REQUEST,
    notification: notification
  }
}

export const removeNotification = (notificationId) => {
  return {
    type: constants.REMOVE_NOTIFICATION_REQUEST,
    notificationId: notificationId
  }
}