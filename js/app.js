import { createStore } from "./redux.js";
import reducer from "./reducer.js";
import { updateName, updateSurname } from "./actions.js";
import inititalState from "./store.js";

const store = createStore(reducer, inititalState);

store.subscribe(() => {
  console.log("ha cambiado algo en el store:", store.getState());
});

console.log("estado inicial: ", store.getState());

store.dispatch(updateName("aomine"));
store.dispatch(updateSurname("daiki"));
