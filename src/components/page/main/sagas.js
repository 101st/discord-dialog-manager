import { call, put, takeLatest } from 'redux-saga/effects';
import Api from './api';
const r = () => Math.random().toString(36).substring(2);

function* getCurrentUserGuilds(action) {
  try {
    const guilds = yield call(Api.getCurrentUserGuilds, action.apiKey);
    yield put({ type: 'GET_CURRENT_USER_GUILDS_SACCESS', guilds: guilds.data });
  } catch (error) {
    let notificationId = r();
    yield put({
      type: 'ADD_NOTIFICATION_REQUEST',
      notification: {
        id: notificationId,
        header: 'GET_CURRENT_USER_GUILDS_REQUEST',
        content: error.toString(),
        colored: 'red',
        delay: 5000
      }
    });
    yield put({ type: 'GET_CURRENT_USER_GUILDS_ERROR', message: error });
  }
}

function* getCurrentUserGuildsSagas() {
  yield takeLatest('GET_CURRENT_USER_GUILDS_REQUEST', getCurrentUserGuilds);
}

export default [
  getCurrentUserGuildsSagas
];