export function createStore(reducer, initialState) {
  let state = initialState
  let updater

  function getState() {
    return state
  }

  function dispatch(action) {
    state = reducer(state, action)
    updater && updater()
  }

  function subscribe(listener) {
    updater = listener
  }

  return {
    getState,
    dispatch,
    subscribe
  }
}
