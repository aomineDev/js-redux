import { actions } from "./actions.js";

export default function reducer(state, action) {
  if (action.type === actions.UPDATE_NAME) {
    return {
      ...state,
      name: action.payload
    }
  } else if (action.type === actions.UPDATE_SURNAME) {
    return {
      ...state,
      surname: action.payload
    }
  }

  return state
}
