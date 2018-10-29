import { createStore } from "redux";
import todoApp from "./reducers";
import { loadState, saveState } from "./localStorage";
import throttle from "lodash/throttle";

const configureStore = () => {
  const persistedState = loadState();

  const store = createStore(
    todoApp,
    persistedState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  store.subscribe(
    throttle(() => {
      saveState({
        items: store.getState().items
      });
    }),
    1000
  );
  return store;
};

export default configureStore;
