import { put, takeLatest } from 'redux-saga/effects';
const r = () => Math.random().toString(36).substring(2);

function* setCommentsGroup(action) {
  try {
    yield put({ type: 'SET_COMMENTS_GROUP_SACCESS', id: action.id });
  } catch (error) {
    let notificationId = r();
    yield put({
      type: 'ADD_NOTIFICATION_REQUEST',
      notification: {
        id: notificationId,
        header: 'SET_COMMENTS_GROUP_REQUEST',
        content: error.toString(),
        colored: 'red',
        delay: 5000
      }
    });
    yield put({ type: 'SET_COMMENTS_GROUP_ERROR', message: error });
  }
}

function* setCommentsGroupSagas() {
  yield takeLatest('SET_COMMENTS_GROUP_REQUEST', setCommentsGroup);
}

export default [
  setCommentsGroupSagas
];