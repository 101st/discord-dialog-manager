import { put, takeLatest } from 'redux-saga/effects'

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* addNotification(action) {
  try {
    yield put({ type: 'ADD_NOTIFICATION_SUCCESS', notification: action.notification });
  } catch (e) {
    yield put({ type: 'ADD_NOTIFICATION_ERROR', message: e });
  }
}

function* addNotificationSagas() {
  yield takeLatest('ADD_NOTIFICATION_REQUEST', addNotification);
}

function* removeNotification(action) {
  try {
    yield put({ type: 'REMOVE_NOTIFICATION_SUCCESS', notificationId: action.notificationId });
  } catch (e) {
    yield put({ type: 'REMOVE_NOTIFICATION_ERROR', message: e });
  }
}

function* removeNotificationSagas() {
  yield takeLatest('REMOVE_NOTIFICATION_REQUEST', removeNotification);
}

export default [
  addNotificationSagas,
  removeNotificationSagas
];