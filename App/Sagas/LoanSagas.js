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
    yield put(LoanActions.checksSuccess(response.data.data))
  } else {
    yield put(LoanActions.checksFailure())
  }
}

export function * getLoan (api, action) {
  const { data } = action
  // get current data from Store
  // const currentData = yield select(LoanSelectors.getData)
  // make the call to the api
  const response = yield call(api.getLoan, data)

  // success?
  if (response.ok) {
    // You might need to change the response here - do this with a 'transform',
    // located in ../Transforms/. Otherwise, just pass the data back from the api.
    yield put(LoanActions.loanSuccess(response.data.data))
  } else {
    yield put(LoanActions.loanFailure())
  }
}
