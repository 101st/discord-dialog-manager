import { call, put, takeLatest } from 'redux-saga/effects'
import Api from './api';

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* setApiKey(action) {
  try {
    const apiKey = yield call(Api.setApiKey, action.apiKey);
    if (apiKey && apiKey.length === 59)
      yield put({ type: "SET_API_KEY_SUCCESS", apiKey: apiKey });
    else
      yield put({ type: "SET_API_KEY_ERROR", message: 'Api Key not correct. It should be a string 59 symbol length.' });
  } catch (e) {
    yield put({ type: "SET_API_KEY_ERROR", message: e });
  }
}

function* formsLoginSagas() {
  yield takeLatest("SET_API_KEY_REQUEST", setApiKey);
}

export default formsLoginSagas;