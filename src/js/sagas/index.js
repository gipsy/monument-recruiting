import { fork } from 'redux-saga/effects';

import { watchRequestFetchApi } from './ui';

export default function* rootSaga() {
  yield [
    fork(watchRequestFetchApi)
  ]
}
