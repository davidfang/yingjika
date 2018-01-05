/* ***********************************************************
* A short word on how to use this automagically generated file.
* We're often asked in the ignite gitter channel how to connect
* to a to a third party api, so we thought we'd demonstrate - but
* you should know you can use sagas for other flow control too.
*
* Other points:
*  - You'll need to add this saga to sagas/index.js
*  - This template uses the api declared in sagas/index.js, so
*    you'll need to define a constant in that file.
*************************************************************/

import { call, put } from 'redux-saga/effects'
import LoanActions from '../Redux/LoanRedux'
// import { LoanSelectors } from '../Redux/LoanRedux'

export function * getTags (api, action) {
  // const { data } = action
  // get current data from Store
  // const currentData = yield select(LoanSelectors.getData)
  // make the call to the api
  const response = yield call(api.getTags)

  // success?
  if (response.ok) {
    // You might need to change the response here - do this with a 'transform',
    // located in ../Transforms/. Otherwise, just pass the data back from the api.
    yield put(LoanActions.tagsSuccess(response.data.data))
  } else {
    yield put(LoanActions.tagsFailure())
  }
}

export function * getChecks (api, action) {
  const { data } = action
  // get current data from Store
  // const currentData = yield select(LoanSelectors.getData)
  // make the call to the api
  const response = yield call(api.getChecks, data)

  // success?
  if (response.ok) {
    // You might need to change the response here - do this with a 'transform',
    // located in ../Transforms/. Otherwise, just pass the data back from the api.
    let d = [
      {
        id: '1',
        type: '0~2000',
        url: 'http://storage-yii-liuliang.mijisu.net/source/1/ibospx1ZRxKDp7QeypCpuafy5D0pujIX.png'
      },
      {
        id: '2',
        type: '2000~5000',
        url: 'http://storage.tianxin.mijisu-yii.test/source/1/H9EsMi0LNUO56rF7zpA3CRFUBQW53xhl.png'
      },
      {
        id: '3',
        type: '5000~10000',
        url: 'http://storage.tianxin.mijisu-yii.test/source/1/ayxIDDXW4VvU-3E8W0xqgqbQLH3a7cE4.png'
      },
      {
        id: '4',
        type: '10000~20000',
        url: 'http://storage.tianxin.mijisu-yii.test/source/1/3jpVHvOMnF-H1vUpQBjJxdOhag6V-RoT.png'
      }
    ]
    yield put(LoanActions.checksSuccess(d))
  } else {
    yield put(LoanActions.checksFailure())
  }
}

export function * getLoan (api, action) {
  const { checkId, tagId } = action
  // get current data from Store
  // const currentData = yield select(LoanSelectors.getData)
  // make the call to the api
  const response = yield call(api.getLoan, checkId, tagId)

  yield put(LoanActions.debug(response))

  // success?
  if (response.ok) {
    // You might need to change the response here - do this with a 'transform',
    // located in ../Transforms/. Otherwise, just pass the data back from the api.
    yield put(LoanActions.loanSuccess(response.data.data))

  } else {
    yield put(LoanActions.loanFailure())
  }
}
