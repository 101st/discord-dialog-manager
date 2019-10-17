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


function* getChannels(action) {
  try {
    const channels = yield call(Api.getChannels, action.apiKey);
    yield put({ type: 'GET_CHANNELS_SACCESS', channels: channels.data });
  } catch (error) {
    let notificationId = r();
    yield put({
      type: 'ADD_NOTIFICATION_REQUEST',
      notification: {
        id: notificationId,
        header: 'GET_CHANNELS_REQUEST',
        content: error.toString(),
        colored: 'red',
        delay: 5000
      }
    });
    yield put({ type: 'GET_CHANNELS_ERROR', message: error });
  }
}

function* getChannelsSagas() {
  yield takeLatest('GET_CHANNELS_REQUEST', getChannels);
}


function* searchGuildText(action) {
  try {
    const messages = yield call(Api.searchGuildText, action.apiKey, action.guildId, action.params);
    yield put({ type: 'SEARCH_GUILD_TEXT_SACCESS', messages: messages });
  } catch (error) {
    let notificationId = r();
    yield put({
      type: 'ADD_NOTIFICATION_REQUEST',
      notification: {
        id: notificationId,
        header: 'GET_CHANNELS_REQUEST',
        content: error.toString(),
        colored: 'red',
        delay: 5000
      }
    });
    yield put({ type: 'SEARCH_GUILD_TEXT_ERROR', message: error });
  }
}

function* searchGuildTextSagas() {
  yield takeLatest('SEARCH_GUILD_TEXT_REQUEST', searchGuildText);
}

function* getUser(action) {
  try {
    const user = yield call(Api.getUser, action.apiKey, action.userId);
    yield put({ type: 'GET_USER_SACCESS', user: user });
  } catch (error) {
    let notificationId = r();
    yield put({
      type: 'ADD_NOTIFICATION_REQUEST',
      notification: {
        id: notificationId,
        header: 'GET_CHANNELS_REQUEST',
        content: error.toString(),
        colored: 'red',
        delay: 5000
      }
    });
    yield put({ type: 'GET_USER_ERROR', message: error });
  }
}

function* getUserSagas() {
  yield takeLatest('GET_USER_REQUEST', getUser);
}

function* getMe(action) {
  try {
    const me = yield call(Api.getMe, action.apiKey);
    yield put({ type: 'GET_ME_SACCESS', me: me });
  } catch (error) {
    let notificationId = r();
    yield put({
      type: 'ADD_NOTIFICATION_REQUEST',
      notification: {
        id: notificationId,
        header: 'GET_CHANNELS_REQUEST',
        content: error.toString(),
        colored: 'red',
        delay: 5000
      }
    });
    yield put({ type: 'GET_ME_ERROR', message: error });
  }
}

function* getMeSagas() {
  yield takeLatest('GET_ME_REQUEST', getMe);
}

export default [
  getCurrentUserGuildsSagas,
  getChannelsSagas,
  searchGuildTextSagas,
  getUserSagas,
  getMeSagas
];