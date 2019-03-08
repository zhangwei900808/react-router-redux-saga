import { createStore, compose, applyMiddleware } from "redux";
import { routerMiddleware } from "connected-react-router";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/es/storage";
// import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";
import { createBrowserHistory } from "history";
import createRootReducer from "../reducers";

export const history = createBrowserHistory();

const historyRouterMiddleware = routerMiddleware(history);
// 组合middleware
const middleWares = [
  // createSagaMiddleware,
  historyRouterMiddleware,
  logger
];

const persistConfig = {
  key: "root",
  storage
};

const persistReducers = persistReducer(
  persistConfig,
  createRootReducer(history)
);

export default function configureStore(preloadedState) {
  const store = createStore(
    persistReducers,
    preloadedState,
    compose(applyMiddleware(...middleWares))
  );
  let persistor = persistStore(store);
  return { persistor, store };
}
