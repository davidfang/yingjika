import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'
/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  loanRequest: ['checkId', 'tagId'],
  loanSuccess: ['data'],
  loanFailure: ['response'],
  tagsRequest: null,
  tagsSuccess: ['data'],
  tagsFailure: null,
  checksRequest: null,
  checksSuccess: ['data'],
  checksFailure: null,
  debug: ['response']
})

export const LoanTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  checkId: 1,
  checks: [],
  tagId: 1,
  tags: [],
  data: [],
  response: null,
  fetching: null,
  error: null
})

/* ------------- Selectors ------------- */

export const LoanSelectors = {
  getData: state => state.data
}

/* ------------- Reducers ------------- */

// request the data from an api
export const loanRequest = (state, { checkId, tagId }) =>
  state.merge({ fetching: true, checkId, tagId, payload: null })

// successful api lookup
export const loanSuccess = (state, action) => {
  const { data } = action
  return state.merge({ fetching: false, error: null, data })
}

// Something went wrong somewhere.
export const loanFailure = (state, action) =>
  state.merge({ fetching: false, error: true, data: [], response: action.response })

// request the data from an api
export const checkRequest = (state) =>
  state.merge({ fetching: true, error: null })

// successful api lookup
export const checkSuccess = (state, action) => {
  const { data } = action
  return state.merge({ fetching: false, error: null, checks: data })
}

// Something went wrong somewhere.
export const checkFailure = state =>
  state.merge({ fetching: false, error: true, checks: [] })

// request the data from an api
export const tagRequest = (state) =>
  state.merge({ fetching: true, error: null })

// successful api lookup
export const tagSuccess = (state, action) => {
  const { data } = action
  return state.merge({ fetching: false, error: null, tags: data })
}

// Something went wrong somewhere.
export const tagFailure = state =>
  state.merge({fetching: false, error: true, tags: []})

export const debug = (state, response) => state.merge({response})
/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.LOAN_REQUEST]: loanRequest,
  [Types.LOAN_SUCCESS]: loanSuccess,
  [Types.LOAN_FAILURE]: loanFailure,
  [Types.CHECKS_REQUEST]: checkRequest,
  [Types.CHECKS_SUCCESS]: checkSuccess,
  [Types.CHECKS_FAILURE]: checkFailure,
  [Types.TAGS_REQUEST]: tagRequest,
  [Types.TAGS_SUCCESS]: tagSuccess,
  [Types.TAGS_FAILURE]: tagFailure,
  [Types.DEBUG]: debug

})
