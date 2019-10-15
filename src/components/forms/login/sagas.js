import { call, put, takeLatest } from 'redux-saga/effects'
import Api from './api';
const r = () => Math.random().toString(36).substring(2);

function* setApiKey(action) {
  try {
    const apiKey = yield call(Api.setApiKey, action.apiKey);
    if (apiKey && apiKey.length === 59)
      yield put({ type: "SET_API_KEY_SUCCESS", apiKey: apiKey });
    else {
      let notificationId = r();
      yield put({
        type: "ADD_NOTIFICATION_REQUEST",
        notification: {
          id: notificationId,
          header: 'API KEY ERROR',
          content: 'API Key is not valid. Exp: "c89ssjJSs9sj...d9si, length 59 symbols."',
          colored: 'red',
          delay: 5000
        }
      });
    }
  } catch (e) {
    yield put({ type: "SET_API_KEY_ERROR", message: e });
  }
}

function* formsLoginSagas() {
  yield takeLatest("SET_API_KEY_REQUEST", setApiKey);
}

export default [
  formsLoginSagas
];