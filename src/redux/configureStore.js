/* eslint-disable */
import { createBrowserHistory } from "history";
import thunk from "redux-thunk";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { connectRouter } from "connected-react-router";

import Filter from "./modules/filter";
import Data from "./modules/data";
import ScrollPage from "./modules/scrollPage";
import NowPage from "./modules/nowPage";

export const history = createBrowserHistory();
const rootReducer = combineReducers({
  filter: Filter,
  data: Data,
  scrollPage: ScrollPage,
  nowPage: NowPage,
  router: connectRouter(history),
});

const middlewares = [thunk.withExtraArgument({ history: history })];
const env = process.env.NODE_ENV;

if (env === "development") {
  const { logger } = require("redux-logger");
  middlewares.push(logger);
}

// 4. 리덕스 데브툴(redux devTools 설정)
const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const enhancer = composeEnhancers(applyMiddleware(...middlewares));

let store = (initialStore) => createStore(rootReducer, enhancer);

export default store();
