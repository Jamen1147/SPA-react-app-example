import * as types from '../actions/types'

const INITAL_STATE = {
  isSignedIn: null,
  userId: null
}

export default (state = INITAL_STATE, action) => {
  switch(action.type){
    case types.SIGN_IN:
      return { ...state, isSignedIn: true, userId: action.payload }
    case types.SIGN_OUT:
        return { ...state, isSignedIn: false, userId: null }
    default:
      return state
  }
}